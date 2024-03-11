<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

const { onTouchEnd, onTouchMove, onTouchStart, offset, slide, currentIndex } = useCarousel(0, page.value.gallery.pictures, true)

enum Rating {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5
}

const showGallery = ref(false)
const indexPicture = ref(0)

const starRating = (rating: Rating) => {
  const currentRating = Rating[rating] as unknown as number
  return Array.from({ length: 5 }, (_, i) => {
    return i < currentRating ? 'i-heroicons-star-20-solid' : 'i-heroicons-star'
  })
}

const handleShowGallery = (index: number) => {
  indexPicture.value = index
  showGallery.value = true
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <div>
    <!-- HERO BANNER -->
    <div class="py-24 sm:py-32 md:py-40 relative">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
        <div class="text-center">
          <div class="mb-10">
            <UBadge v-if="page.hero.headline" variant="subtle" size="lg" class="relative rounded-full font-semibold">
              {{ page.hero.headline.label }}
            </UBadge>
          </div>

          <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
            {{ page.hero.title }}
            <ol class="overflow-hidden h-10 md:h-[72px]">
              <li v-for="(tag, index) in page.hero.tags" :key="index" class="text-primary animate-slide-up">
                <span class="inline-block">{{ tag }}</span>
              </li>
            </ol>
          </h1>

          <p class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">
            {{ page.hero.description }}
          </p>

          <div class="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
            <UButton to="tel:+33612345678" label="Réserver maintenant" variant="primary" color="white"
              size="xl" icon="i-heroicons-arrow-right-20-solid" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center" :trailing="true" />
            <UButton to="https://maps.app.goo.gl/yq6CmRisfdyJCMNK7" variant="primary" label="Où nous sommes" color="gray"
              size="xl" icon="i-heroicons-map-pin-20-solid" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center" target="_blank" />
          </div>
        </div>

        <Placeholder />
      </div>
    </div>

    <!-- FEATURES -->
    <div id="features" class="py-24 sm:py-32">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
        <div class="text-center flex flex-col items-center">
          <div class="mb-2 text-base/7 font-semibold text-primary">
            {{ page.features.headline }}
          </div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            {{ page.features.title }}
          </h2>
          <p class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            {{ page.features.description }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 scroll-mt-[calc(4rem+140px+128px+96px)]">
          <div v-for="(item, index) in page.features.items" :key="index" v-bind="item"
            class="relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 hover:ring-primary hover:ring-2 flex-1 flex flex-col transition">
            <div
              class="flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]">
              <div class="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                <div>
                  <div class="mb-2 pointer-events-none">
                    <NuxtImg :src="item.image" loading="lazy" preload class="rounded-lg w-full max-h-52 object-cover" />
                  </div>
                  <p class="text-gray-900 dark:text-white text-base font-bold truncate">
                    {{ item.title }}
                  </p>
                  <p class="text-gray-900 dark:text-white text-sm font-bold truncate">
                    {{ item.price }}
                  </p>
                  <p class="text-[15px] text-gray-500 dark:text-gray-400 mt-1">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- GALLERY -->
    <div id="gallery" class="py-24 sm:py-32">
      <div class="mx-auto sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
        <div class="text-center flex flex-col items-center">
          <div class="mb-2 text-base/7 font-semibold text-primary">
            {{ page.gallery.headline }}
          </div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            {{ page.gallery.title }}
          </h2>
          <p class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            {{ page.gallery.description }}
          </p>
        </div>

        <div
          class="hidden sm:grid overflow-hidden rounded-xl grid md:grid-cols-4 lg:grid-cols-6  gap-8 scroll-mt-[calc(4rem+140px+128px+96px)]">
          <div v-for="(picture, index) in page.gallery.pictures" :key="index" class="col-span-2">
            <NuxtImg :src="picture.url" loading="lazy" preload class="cursor-pointer w-full h-full object-cover hover:brightness-75" @click="handleShowGallery(index)" />
          </div>
        </div>

        <Gallery :pictures="page.gallery.pictures" :index="indexPicture" :show-gallery="showGallery" @close:gallery="showGallery = false" />

        <div class="sm:hidden w-full relative overflow-hidden" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
          <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(${offset}px)` }">
            <div class="flex" ref="slide">
              <div class="flex-[0_0_100%]" v-for="(picture, index) in page.gallery.pictures" :key="index">
                <NuxtImg :src="picture.url" loading="lazy" preload class="w-full object-cover max-h-56" />
              </div>
            </div>
          </div>
          <div class="absolute bottom-[15px] right-[15px] z-50 bg-black text-white text-sm opacity-80 py-1 px-2 rounded"> 
            <span>{{ currentIndex + 1 }} / {{ page.gallery.pictures.length }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- TESTIMONIALS -->
    <div id="testimonials" class="py-24 sm:py-32">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
        <div class="text-center flex flex-col items-center">
          <div class="mb-2 text-base/7 font-semibold text-primary">
            {{ page.testimonials.headline }}
          </div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            {{ page.testimonials.title }}
          </h2>
          <p class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            {{ page.testimonials.description }}
          </p>
        </div>

        <div
          class="column-1 md:columns-2 lg:columns-3 gap-8 space-y-8 xl:columns-4 scroll-mt-[calc(4rem+140px+128px+96px)]">
          <div class="break-inside-avoid" v-for="(testimonial, index) in page.testimonials.items" :key="index">
            <div
              class="rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 bg-white dark:bg-gray-900 relative">
              <div class="flex flex-col px-4 py-5 sm:p-6">
                <div>
                  <q class="text-gray-600 dark:text-gray-300">
                    {{ testimonial.quote }}
                  </q>
                  <div class="flex items-center gap-3 mt-6 relative">
                    <UAvatar :src="testimonial.author.avatar.src" :alt="testimonial.author.name" />
                    <div>
                      <p class="font-semibold text-gray-900 dark:text-white text-sm">
                        {{ testimonial.author.name }}
                      </p>
                      <p class="text-gray-500 dark:text-gray-400 text-sm">
                        <UIcon v-for="(icon, index) in starRating(testimonial.author.rating)" :key="index" :name="icon"
                          class="text-primary" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ -->
    <div id="faq" class="py-24 sm:py-32">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
        <div class="text-center flex flex-col items-center">
          <div class="mb-2 text-base/7 font-semibold text-primary">
            {{ page.faq.headline }}
          </div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            {{ page.faq.title }}
          </h2>
          <p class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            {{ page.faq.description }}
          </p>
        </div>

        <UAccordion multiple :items="page.faq.items" color="black" size="xl" variant="ghost"
          class="max-w-4xl mx-auto" />
      </div>
    </div>
  </div>
</template>