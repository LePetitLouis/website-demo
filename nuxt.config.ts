// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/image'],
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  typescript: {
    strict: false
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0'
  }
})