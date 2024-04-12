// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/image', 'nuxt-mapbox'],
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  typescript: {
    strict: false
  },
  mapbox: {
    accessToken: 'pk.eyJ1IjoicGV0aXRsb3VpcyIsImEiOiJjbGVzdHl4YzQwMGZkM3Vtc2M1NzVhd2ViIn0.3KrL3lX7D0z_q5WTy3ZiFg',
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0'
  }
})