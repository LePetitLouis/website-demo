<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <footer class="relative border-t border-gray-200 dark:border-gray-800 bg-white-medium dark:bg-black">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3">
      <div class="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3">
        <ClientOnly>
          <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray"
            variant="ghost" aria-label="Theme" @click="isDark = !isDark" />
          <template #fallback>
            <div class="w-8 h-8" />
          </template>
        </ClientOnly>
      </div>

      <div class="mt-3 lg:mt-0 lg:order-2 flex items-center justify-center"></div>

      <div class="flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1">
        <p class="text-gray-500 dark:text-gray-400 text-sm">
          © {{ new Date().getFullYear() }} Station Location Loisirs. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>