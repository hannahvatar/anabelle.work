import Swup from 'https://unpkg.com/swup@4?module';

const swup = new Swup({
  containers: ["#swup"],
  animateHistoryBrowsing: true,
  cache: false,
  debug: true,
  animationSelector: '[class*="swup-transition-"]'
});

// Function to update page-specific styles
const updatePageStyles = () => {
  const currentPage = window.location.pathname.split("/").pop() || 'index.html';

  // Reset body classes
  document.body.classList.remove('home');

  // Add appropriate class based on current page
  if (currentPage === 'index.html' || currentPage === '/') {
    document.body.classList.add('home');
  }

  // Update active nav link
  const navButtons = document.querySelectorAll(".nav-button a");
  navButtons.forEach(link => {
    link.classList.toggle('active', link.getAttribute("href") === currentPage);
  });
};

// Initial load
updatePageStyles();

// After Swup content replace
swup.hooks.on('page:view', updatePageStyles);

// Debug transitions
swup.hooks.on('content:replace', () => console.log('Content replaced'));
swup.hooks.on('animation:out:start', () => console.log('Page transition out started'));
swup.hooks.on('animation:in:start', () => console.log('Page transition in started'));
