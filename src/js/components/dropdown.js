document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('caseStudiesToggle');
  const menu = document.getElementById('caseStudiesMenu');

  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.toggle('show');
    this.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove('show');
      toggle.classList.remove('active');
    }
  });
});

// Initialize Feather icons
feather.replace();
