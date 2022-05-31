import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    modules: [['@storyblok/nuxt', { accessToken: 'EZNSIs7JZsIreYZKwB7Zewtt' }]],
    app: {
      head: {
        script: [{ src: 'https://cdn.tailwindcss.com' }],
      },
    },
})