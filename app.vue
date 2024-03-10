<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en',
    class: 'scroll-smooth dark:bg-black'
  }
})

useSeoMeta({
  ogImage: 'https://landing-template.nuxt.dev/social-card.png',
  twitterImage: 'https://landing-template.nuxt.dev/social-card.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <Header />

  <main class="min-h-[calc(100vh-4rem)] bg-white-medium dark:bg-black">
    <NuxtPage />
  </main>

  <Footer />
</template>