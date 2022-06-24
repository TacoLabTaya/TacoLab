import { defineNuxtPlugin } from '#app'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('appear', {
    beforeMount(el, binding, vnode) {
      el.style.background = binding.value

      const handleOnScroll = () => {
        console.log(window.scrollY)
      };
      window.addEventListener('scroll', handleOnScroll);

    }
  })
})

/*
export default {
  install: (app, options) => {
    console.log("starrrrrrrrrrrrrrrrrrrrrrrrrrrt")
    app.directive('appear', {
      beforeMount(el, binding, vnode) {
        el.style.background = binding.value

        const handleOnScroll = () => {
          console.log(window.scrollY)
        };
        window.addEventListener('scroll', handleOnScroll);

      }
    })
  }
}
*/
/*
const isInScreen = (el) => {
  const { top: elementTop, bottom: elementBottom } = el.getBoundingClientRect();
  // 画面下端 < HTML要素の下端 && HTML要素の上端 < 画面上端
  return (window.screenTop < elementTop && elementBottom < window.innerHeight);
};

var time = Date.now();
var throttle = function(fn , delay) {
  return function() { 
    if( (time + delay) < Date.now()) {
      time = Date.now();
      fn();
    }
  }
};
*/