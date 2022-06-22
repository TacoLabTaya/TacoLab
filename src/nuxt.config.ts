import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    modules: [['@storyblok/nuxt', { accessToken: 'EZNSIs7JZsIreYZKwB7Zewtt' }]],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                  additionalData: `
                    @import "@/assets/styles/_base.scss";
                    @import "@/assets/styles/_mediaquery.scss";
                    @import "@/assets/styles/_font.scss";
                  `
                },
            },
        },
    }
})