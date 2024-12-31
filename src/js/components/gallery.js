document.addEventListener('DOMContentLoaded', () => {
  console.log('Gallery script loaded!'); // Debug line to verify script loads
  const container = document.querySelector('.gallery-container');
  const dots = document.querySelectorAll('.dot');

  if (!container || !dots.length) {
    console.log('Gallery elements not found!'); // Debug line
    return;
  }

  console.log('Found gallery elements:', { container, dots }); // Debug line

  container.addEventListener('scroll', () => {
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.querySelector('.gallery-item').offsetWidth;
    const activeIndex = Math.round(scrollPosition / itemWidth);

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
    });
  });
});
