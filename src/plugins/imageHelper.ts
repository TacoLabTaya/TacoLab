import { defineNuxtPlugin } from '#app'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('imagePath', (base, width, height) => {
        return `${base}/m/${width}x${height}/smart`
    })
})