import { defineNuxtPlugin } from '#app'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('appear', {
    beforeMount(el, binding, vnode) {
      //el.style.background = binding.value
      var time = Date.now();
      var classname = 'pAppear-ap';
      if(binding.value != null && binding.value != ''){
        classname = binding.value;
      }
      const throttle = function(fn , delay) {
        return function() { 
          if( (time + delay) < Date.now()) {
            time = Date.now();
            fn();
          }
        }
      };
      const isInScreen = (el) => {
        const { top: elementTop, bottom: elementBottom } = el.getBoundingClientRect();
        // 画面下端 < HTML要素の下端 && HTML要素の上端 < 画面上端
        return (window.screenTop < elementTop && elementBottom < window.innerHeight);
      };
      const checkAppear = () => {
        if(isInScreen(el)){
          el.classList.add(classname);
        }
        else{
          el.classList.remove(classname);
        }
      };
      window.addEventListener('scroll', throttle(checkAppear, 100));
      checkAppear();
    }
  })
})




