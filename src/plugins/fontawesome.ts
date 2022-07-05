import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCirclePlus, faBars, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { defineNuxtPlugin } from '#app'
export default defineNuxtPlugin((nuxtApp) => {

  config.autoAddCss = false
  library.add(faCirclePlus, faBars, faCircleArrowRight)
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})