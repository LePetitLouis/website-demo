<script setup lang="ts">
import useScrollspy from '@/composables/scroll'

const showBurgerMenu = ref(false)

const { activeSection } = useScrollspy();

const links = computed(() => [{
  label: 'Nos locations',
  to: 'features',
  icon: 'i-heroicons-list-bullet'
}, {
  label: 'Galerie',
  to: 'gallery',
  icon: 'i-heroicons-photo'
}, {
  label: 'Témoignages',
  to: 'testimonials',
  icon: 'i-heroicons-academic-cap'
}, {
  label: 'FAQ',
  to: 'faq',
  icon: 'i-heroicons-question-mark-circle'
}])

const scrollToTop = () => {
  showBurgerMenu.value = false
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <header class="backdrop-blur dark:border-gray-800 -mb-px sticky top-0 z-50 bg-white-medium dark:bg-black">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl border-b border-gray-200 lg:!border-transparent flex items-center justify-between gap-3 h-[4rem]">
      <ULink
        class="lg:flex-1 flex items-center gap-1.5"
        to="/"
        @click="scrollToTop"
      >
        Station Location Loisirs 
        <!-- <UBadge label="Briare" variant="subtle" class="hidden md:block mb-0.5" /> -->
      </ULink>

      <ul class="items-center px-3 gap-x-0 rounded-full hidden lg:flex">
        <template v-for="(link, index) in links" :key="index">
          <li class="relative">
            <ULink
              :to="`#${link.to}`"
              :class="{ 'text-sm/6 flex items-center gap-1 py-2 px-4 font-medium transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:opacity-0 after:bg-gray-900 dark:after:bg-white after:transition-opacity text-gray-900 dark:text-white after:opacity-100': link.to === activeSection }"
              class="text-sm/6 flex items-center gap-1 py-2 px-4 font-medium transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:opacity-0 after:bg-gray-900 dark:after:bg-white after:transition-opacity text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {{ link.label }}
            </ULink>
          </li>
        </template>
      </ul>

      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <UButton to="tel:+33612345678" aria-label="Mail" color="gray" variant="ghost" trailing-icon="i-heroicons-phone-20-solid" class="lg:flex" />
        <UButton to="mailto:stationlocation@aol.com" aria-label="Phone" color="gray" variant="ghost" trailing-icon="i-heroicons-envelope-20-solid" class="lg:flex" />
        <UButton to="https://www.facebook.com/JoeletCharline" target="_blank" aria-label="Facebook" color="gray" variant="ghost" trailing-icon="i-simple-icons-facebook" class="lg:flex" />
        <UButton color="white" variant="ghost" :trailing-icon="showBurgerMenu ? 'i-heroicons-x-mark-20-solid' : 'i-heroicons-bars-3-20-solid'" class="lg:hidden flex transition" @click="showBurgerMenu = !showBurgerMenu" />
      </div>
    </div>
    <Transition name="slide-left">
      <div
        v-show="showBurgerMenu"
        class="fixed inset-0 h-screen bg-white dark:bg-black z-[-1] overflow-hidden lg:hidden"
      >
        <div class="h-full ml-12 flex flex-col gap-10 justify-center">
          <template v-for="(link, index) in links" :key="index">
            <ULink 
              :to="`#${link.to}`"
              :class="{ 'flex items-center gap-1.5 lg:gap-2 group text-primary font-semibold': link.to === activeSection }"
              class="flex items-center gap-2 lg:gap-4 group text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium"
              @click="showBurgerMenu = false"
            >
              <div class="rounded-md p-1 inline-flex ring-inset ring-1 bg-gray-100/50 dark:bg-gray-800/50 ring-gray-300 dark:ring-gray-700 group-hover:bg-primary group-hover:ring-primary group-hover:text-background">
                <UIcon :name="link.icon" class="text-lg" />
              </div>
              <span class="text-lg relative">{{ link.label }}</span>
            </ULink>
          </template>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style>
.slide-left-enter-active, .slide-left-leave-active {
  transition: transform 0.5s ease;
}

.slide-left-enter-from, .slide-left-leave-to {
  transform: translateX(-100%);
}
</style>