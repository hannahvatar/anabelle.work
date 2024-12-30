document.addEventListener('DOMContentLoaded', function() {
  // Modal Elements
  const timelineModal = document.getElementById('timelineModal');
  const openTimelineButton = document.getElementById('openTimelineModal');
  const closeTimelineButton = document.getElementById('closeTimelineModal');

  const aboutMeModal = document.getElementById('aboutMeModal');
  const openAboutMeButton = document.getElementById('openAboutMeModal');
  const closeAboutMeButton = document.getElementById('closeAboutMeModal');

  const desjardinsModal = document.getElementById('desjardinsModal');
  const openDesjardinsButton = document.querySelector('.dropdown-menu a[href="case-study-2.html"]');
  const closeDesjardinsButton = document.getElementById('closeDesjardinsModal');

  const grrunchModal = document.getElementById('grrunchModal');
  const openGrrunchButton = document.querySelector('.dropdown-menu a[href="case-study-1.html"]');
  const closeGrrunchButton = document.getElementById('closeGrrunchModal');

  const turoModal = document.getElementById('turoModal');
  const openTuroButton = document.querySelector('.dropdown-menu a[href="case-study-3.html"]');
  const closeTuroButton = document.getElementById('closeTuroModal');

  // Timeline Modal Handlers
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

  if (desjardinsModal) {
    desjardinsModal.addEventListener('click', function(e) {
      if (e.target === desjardinsModal) {
        desjardinsModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Grrunch Modal Handlers
  if (openGrrunchButton) {
    openGrrunchButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation(); // Prevent dropdown from closing

      // Close any open dropdowns
      const dropdowns = document.querySelectorAll('.dropdown-menu');
      dropdowns.forEach(dropdown => dropdown.classList.remove('show'));

      grrunchModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeGrrunchButton) {
    closeGrrunchButton.addEventListener('click', function() {
      grrunchModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (grrunchModal) {
    grrunchModal.addEventListener('click', function(e) {
      if (e.target === grrunchModal) {
        grrunchModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Turo Modal Handlers
  if (openTuroButton) {
    openTuroButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation(); // Prevent dropdown from closing

      // Close any open dropdowns
      const dropdowns = document.querySelectorAll('.dropdown-menu');
      dropdowns.forEach(dropdown => dropdown.classList.remove('show'));

      turoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeTuroButton) {
    closeTuroButton.addEventListener('click', function() {
      turoModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (turoModal) {
    turoModal.addEventListener('click', function(e) {
      if (e.target === turoModal) {
        turoModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Close modals with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const modals = [timelineModal, aboutMeModal, desjardinsModal, grrunchModal, turoModal];
      modals.forEach(modal => {
        if (modal && modal.classList.contains('active')) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }
  });
});
