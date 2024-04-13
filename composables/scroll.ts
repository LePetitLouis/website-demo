import { ref, onMounted } from 'vue';

export default function useScrollspy() {
  const activeSection = ref('');

  const updateActiveSection = () => {
    const sections = [
      { id: 'features' },
      { id: 'gallery' },
      { id: 'testimonials' },
      { id: 'contact' }
    ];

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });
  };

  onMounted(() => {
    updateActiveSection();
  });

  return {
    activeSection
  };
}