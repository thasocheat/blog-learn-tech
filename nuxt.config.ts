import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  // head: {
  //   title: "Learn Tech",
  //   htmlAttrs: {
  //     lang: "kh",
  //   },
  //   meta: [
  //     { charset: "utf-8" },
  //     { name: "viewport", content: "width=device-width, initial-scale=1" },
  //     { hid: "description", name: "description", content: "" },
  //     { name: "format-detection", content: "telephone=no" },
  //   ],
  //   link: [{ rel: "icon", type: "image/x-icon", href: "../circle.png" }],
  // },

  publicRuntimeConfig: {
    API_KEY: process.env.NUXT_ENV_BUTTER_API_TOKEN,
    PREVIEW: process.env.NUXT_ENV_BUTTER_PREVIEW ?? "true",
  },
  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/main.css',
    '~/assets/css/lineicons.css',
    '~/assets/css/tiny-slider.css',
  ],
  vite: {
    optimizeDeps: {
      exclude: [
        'plugins/ButterCMS.ts'
      ]
    }
  }
})
