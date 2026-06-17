// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {enabled: true},
  css: [
    '~/assets/css/main.css',
    './node_modules/@xpressengine/xeicon/xeicon.min.css'
  ],
  modules: [
    '@nuxt/ui'
  ],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  ui: {
    colorMode: false
  },
  app: {
    baseURL: '/test-kosignbiz/',
    buildAssetsDir: '_nuxt/', 
  }
})
