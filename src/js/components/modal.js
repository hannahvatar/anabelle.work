document.addEventListener('DOMContentLoaded', function() {
  // Career Timeline Modal
  const timelineModal = document.getElementById('timelineModal');
  const openTimelineButton = document.getElementById('openTimelineModal');
  const closeTimelineButton = document.getElementById('closeTimelineModal');

  // About Me Modal
  const aboutMeModal = document.getElementById('aboutMeModal');
  const openAboutMeButton = document.getElementById('openAboutMeModal');
  const closeAboutMeButton = document.getElementById('closeAboutMeModal');

  // Desjardins Design System Modal
  const desjardinsModal = document.getElementById('desjardinsModal');
  const openDesjardinsButton = document.querySelector('.dropdown-menu a[href="case-study-2.html"]');
  const closeDesjardinsButton = document.getElementById('closeDesjardinsModal');

  // Career Timeline Modal Handlers
  if (openTimelineButton) {
    openTimelineButton.addEventListener('click', function(e) {
      e.preventDefault();
      timelineModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeTimelineButton) {
    closeTimelineButton.addEventListener('click', function() {
      timelineModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Close Career Timeline modal when clicking outside content
  if (timelineModal) {
    timelineModal.addEventListener('click', function(e) {
      if (e.target === timelineModal) {
        timelineModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // About Me Modal Handlers
  if (openAboutMeButton) {
    openAboutMeButton.addEventListener('click', function(e) {
      e.preventDefault();
      aboutMeModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeAboutMeButton) {
    closeAboutMeButton.addEventListener('click', function() {
      aboutMeModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Close About Me modal when clicking outside content
  if (aboutMeModal) {
    aboutMeModal.addEventListener('click', function(e) {
      if (e.target === aboutMeModal) {
        aboutMeModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Desjardins Modal Handlers
  if (openDesjardinsButton) {
    openDesjardinsButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation(); // Prevent dropdown from closing

      // Close any open dropdowns
      const dropdowns = document.querySelectorAll('.dropdown-menu');
      dropdowns.forEach(dropdown => dropdown.classList.remove('show'));

      desjardinsModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeDesjardinsButton) {
    closeDesjardinsButton.addEventListener('click', function() {
      desjardinsModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Close Desjardins modal when clicking outside content
  if (desjardinsModal) {
    desjardinsModal.addEventListener('click', function(e) {
      if (e.target === desjardinsModal) {
        desjardinsModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Close modals with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if (timelineModal && timelineModal.classList.contains('active')) {
        timelineModal.classList.remove('active');
        document.body.style.overflow = '';
      }
      if (aboutMeModal && aboutMeModal.classList.contains('active')) {
        aboutMeModal.classList.remove('active');
        document.body.style.overflow = '';
      }
      if (desjardinsModal && desjardinsModal.classList.contains('active')) {
        desjardinsModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });
});
