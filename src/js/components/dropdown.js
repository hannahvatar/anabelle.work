document.addEventListener('DOMContentLoaded', function () {
  // Add event listeners for all toggle buttons
  document.querySelectorAll('.toggle-button').forEach((button) => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      const dropdownMenu = this.parentElement.querySelector('.dropdown-menu');

      // Toggle visibility and active state
      dropdownMenu.classList.toggle('show');
      this.classList.toggle('active');
    });
  });

  // Close any open dropdowns when clicking outside
  document.addEventListener('click', function (event) {
    document.querySelectorAll('.dropdown-menu').forEach((menu) => {
      const toggleButton = menu.previousElementSibling;

      // Close dropdown if click is outside the menu or its toggle button
      if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
        menu.classList.remove('show');
        toggleButton.classList.remove('active');
      }
    });
  });
});
