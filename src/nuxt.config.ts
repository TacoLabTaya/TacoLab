import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    runtimeConfig: {
      public: {
        name: 'TacoLab',
        host: 'https://tacolab.tech',
      }
    },
    modules: [
      ['@storyblok/nuxt', { accessToken: 'EZNSIs7JZsIreYZKwB7Zewtt' }],
      ['nuxt-jsonld'],
    ],
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
    },
})