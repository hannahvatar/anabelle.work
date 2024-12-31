document.addEventListener('DOMContentLoaded', () => {
  console.log('Script loaded'); // Debug line

  const galleries = document.querySelectorAll('.case-study-gallery');

  galleries.forEach((gallery, index) => {
    const container = gallery.querySelector('.gallery-container');
    const items = gallery.querySelectorAll('.gallery-item');
    const dots = gallery.querySelectorAll('.dot');

    console.log(`Gallery ${index}:`, {
      items: items.length,
      dots: dots.length
    });

    if (items.length > 1 && dots.length > 0) {
      console.log(`Setting up scroll handling for gallery ${index}`);

      dots[0].classList.add('active'); // Initial state

      container.addEventListener('scroll', () => {
        const style = window.getComputedStyle(container);
        const gap = parseInt(style.gap || "0", 10); // Compute gap
        const itemWidth = items[0].offsetWidth + gap;
        const scrollPosition = container.scrollLeft;
        const currentIndex = Math.round(scrollPosition / itemWidth);

        console.log('Scroll event:', {
          scrollPosition,
          itemWidth,
          currentIndex
        });

        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === currentIndex);
        });
      });
    } else {
      const dotsContainer = gallery.querySelector('.scroll-dots');
      if (dotsContainer) {
        dotsContainer.style.display = 'none';
      }
    }
  });
});
