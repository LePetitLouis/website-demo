<script setup lang="ts">
const props = defineProps({
  pictures: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  showGallery: {
    type: Boolean,
    required: true
  }
})

const { previousSlide, nextSlide, offset, slide, currentIndex } = useCarousel(props.index, props.pictures, false)
</script>

<template>
  <Transition name="slide-up">
    <div v-if="showGallery" class="fixed top-0 left-0 w-screen h-screen overflow-hidden z-[999] bg-white dark:bg-black">
      <div class="relative flex items-center justify-center mx-6 mt-8 mb-3">
        <UButton color="black" variant="ghost" trailing-icon="i-heroicons-x-mark-solid"
          class="absolute top-[-8px] left-0 cursor-pointer" @click="$emit('close:gallery')" />
        <span>{{ currentIndex + 1 }} / {{ pictures.length }}</span>
      </div>

      <div class="flex items-center justify-between gap-8 h-full p-5">
        <!-- Previous -->
        <div class="w-[48px] h-[48px]">
          <UIcon v-if="currentIndex > 0" name="i-heroicons-chevron-left-20-solid"
            class="inline-block cursor-pointer w-[48px] h-[48px] flex items-center justify-center border border-black text-black dark:text-white rounded-full transition-all"
            @click="previousSlide" />
        </div>

        <!-- Content -->
        <div class="w-full relative overflow-hidden">
          <div class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(${offset}px)` }">
            <div class="flex" ref="slide">
              <div class="flex-[0_0_100%]" v-for="(picture, index) in pictures" :key="index">
                <NuxtImg :src="picture.url" loading="lazy" preload class="w-full object-cover max-h-[450px]" />
              </div>
            </div>
          </div>
        </div>

        <!-- Next -->
        <div class="w-[48px] h-[48px]">
          <UIcon v-if="currentIndex < pictures.length - 1" name="i-heroicons-chevron-right-20-solid"
            class="inline-block cursor-pointer w-[48px] h-[48px] flex items-center justify-center border border-black text-black dark:text-white rounded-full transition-all"
            @click="nextSlide" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-up-enter-from, .slide-up-leave-to {
  transform: translateY(100%);
}

.slide-up-top-enter-active {
  transition: transform 0.3s ease-in-out;
}

.slide-up-top-enter-from, .slide-up-top-leave-to {
  transform: translateX(100%);
}

.slide-up-top-enter-to, .slide-up-top-leave-from {
  transform: translateX(0);
}
</style>