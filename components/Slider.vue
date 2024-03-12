<script setup lang="ts">
defineProps({
  images: {
    type: Object,
    required: true
  },
  orientation: {
    type: String,
    default: 'left'
  }
})
</script>

<template>
  <div class="overflow-hidden w-full">
    <div :class="`flex items-center gap-4 slide-${orientation}`">
      <template v-for="(image, index) in images" :key="index">
        <NuxtImg class="h-52 object-cover rounded-lg" :src="image" :alt="`Slide ${index + 1}`" loading="lazy"
          preload />
      </template>
    </div>
  </div>
</template>

<style scoped>
@keyframes scroll-left {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  from {
    transform: translateX(-50%);
  }

  to {
    transform: translateX(0);
  }
}

.slide-left {
  animation: scroll-left linear 10s infinite;
}

.slide-left:hover {
  animation-play-state: paused;
}

.slide-right {
  animation: scroll-right linear 10s infinite;
}

.slide-right:hover {
  animation-play-state: paused;
}
</style>