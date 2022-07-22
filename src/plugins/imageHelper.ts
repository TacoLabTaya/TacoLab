import { defineNuxtPlugin } from '#app'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('imagePath', (base) => {
        return `${base}/m/`;
    })
    nuxtApp.provide('imagePathResize', (base, width, height) => {
        return `${base}/m/${width}x${height}/smart`
    })
    nuxtApp.provide('imagePathGray', (base) => {
        return `${base}/m/filters:grayscale()`;
    })
})