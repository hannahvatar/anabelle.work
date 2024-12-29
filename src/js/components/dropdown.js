document.addEventListener('DOMContentLoaded', function () {
  // Check saved states on page load
  document.querySelectorAll('.dropdown-menu').forEach((menu) => {
    const menuId = menu.parentElement.id;
    const savedState = localStorage.getItem(`dropdownState-${menuId}`);
    if (savedState === 'true') {
      menu.classList.add('show');
      const toggleButton = menu.previousElementSibling;
      toggleButton.classList.add('active');
    }
  });

  // Add event listeners for all toggle buttons
  document.querySelectorAll('.toggle-button').forEach((button) => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      const dropdownMenu = this.parentElement.querySelector('.dropdown-menu');
      const menuId = this.parentElement.id;

      // Toggle visibility and active state
      dropdownMenu.classList.toggle('show');
      this.classList.toggle('active');

      // Save state to localStorage
      localStorage.setItem(
        `dropdownState-${menuId}`,
        dropdownMenu.classList.contains('show')
      );
    });
  });

  // Close any open dropdowns when clicking outside
  document.addEventListener('click', function (event) {
    document.querySelectorAll('.dropdown-menu').forEach((menu) => {
      const toggleButton = menu.previousElementSibling;
      const menuId = menu.parentElement.id;

      // Close dropdown if click is outside the menu or its toggle button
      if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
        menu.classList.remove('show');
        toggleButton.classList.remove('active');
        // Update localStorage when closing
        localStorage.setItem(`dropdownState-${menuId}`, 'false');
      }
    });
  });
});
