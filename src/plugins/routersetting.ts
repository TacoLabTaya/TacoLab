
import { defineNuxtPlugin, useRouter } from '#app'
export default defineNuxtPlugin((nuxtApp) => {
  useRouter().options.scrollBehavior = (to, from, savedPosition) => {
    if (to.hash === '') {
      return { left: 0, top: 0 }
    }
  }
});