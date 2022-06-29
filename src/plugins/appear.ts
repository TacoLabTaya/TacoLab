import { defineNuxtPlugin } from '#app'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('appear', {
    beforeMount(el, binding, vnode) {
      //el.style.background = binding.value
      var time = Date.now();
      var classtag = 'pAppear-ap';
      var callback = () => {};
      if(binding.value != null && binding.value != {}){
        if(binding.value.cl != null) classtag = binding.value.cl;
        if(binding.value.fn != null) callback = binding.value.fn;
      }
      const throttle = function(fn , delay) {
        return function() { 
          if( (time + delay) < Date.now()) {
            time = Date.now();
            fn();
          }
        }
      };
      const checkAppear = () => {
        if(isInScreen(el)){
          if(el != null) el.classList.add(classtag);
          callback();
        }
        else{
          if(el != null) el.classList.remove(classtag);
          callback();
        }
      };   
      window.addEventListener('scroll', throttle(checkAppear, 100));
      checkAppear();
    },
    
    updated(el, binding, vnode) {
      var classtag = 'pAppear-ap';
      var callback = () => {};
      if(binding.value != null && binding.value != {}){
        if(binding.value.cl != null) classtag = binding.value.cl;
        if(binding.value.fn != null) callback = binding.value.fn;
      }
      if(isInScreen(el)){
        if(el != null) el.classList.add(classtag);
        callback();
      }
      else{
        if(el != null) el.classList.remove(classtag);
        callback();
      }
    }
  })
})
const isInScreen = (el) => {
  const { top: elementTop, bottom: elementBottom } = el.getBoundingClientRect();
  // 画面下端 < HTML要素の下端 && HTML要素の上端 < 画面上端
  return (window.screenTop < elementTop && elementBottom < window.innerHeight);
};   


