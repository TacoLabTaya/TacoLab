import { defineNuxtPlugin } from '#app'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('hello', (name) => {
        return `Hello ${name}!`;
    })
})