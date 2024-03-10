import { onMounted, ref } from "vue"

export function useCarousel(index, listPictures, autoplay = false) {
  const currentIndex = ref(index)
  const touchStartX = ref(0)
  const touchEndX = ref(0)
  const offset = ref(0)
  const isDragging = ref(false)
  const threshold = ref(50)
  const slide = ref(null)

  const autoScrollInterval = 3000
  const autoScrollDirection = ref('right')
  let intervalId = null

  const onTouchStart = (event) => {
    isDragging.value = true
    touchStartX.value = event.touches[0].clientX
  }
  
  const onTouchMove = (event) => {
    if (isDragging.value) {
      const touchMoveX = event.touches[0].clientX;
      const deltaX = touchMoveX - touchStartX.value;
      offset.value = -currentIndex.value * slide.value.offsetWidth + deltaX;
    }
  }
  
  const onTouchEnd = (event) => {
    if (isDragging.value) {
      touchEndX.value = event.changedTouches[0].clientX;
      const deltaX = touchEndX.value - touchStartX.value;
  
      if (deltaX > threshold.value) previousSlide();
      else if (deltaX < -threshold.value) nextSlide();
      else offset.value = -currentIndex.value * slide.value.offsetWidth;
  
      isDragging.value = false;
    }
  }
  
  const previousSlide = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--;
    }
    offset.value = -currentIndex.value * slide.value.offsetWidth;
  }
   
  const nextSlide = () => {
    if (currentIndex.value < listPictures.length - 1) {
      currentIndex.value++;
    }
    offset.value = -currentIndex.value * slide.value.offsetWidth;
  }

  const startAutoScroll = () => {
    intervalId = setInterval(() => {
      if (autoScrollDirection.value === 'right') {
        nextSlide();
      } else {
        previousSlide();
      }
  
      if (currentIndex.value === listPictures.length - 1) {
        autoScrollDirection.value = 'left';
      } else if (currentIndex.value === 0) {
        autoScrollDirection.value = 'right';
      }
    }, autoScrollInterval);
  }

  const stopAutoScroll = () => {
    clearInterval(intervalId);
  }

  onMounted(() => {
    if (slide.value) offset.value = -index * slide.value.offsetWidth;
    if (autoplay) startAutoScroll();
  });

  onUnmounted(() => stopAutoScroll());

  return {
    offset,
    currentIndex,
    slide,
    previousSlide,
    nextSlide,
    onTouchEnd,
    onTouchMove,
    onTouchStart
  }
}