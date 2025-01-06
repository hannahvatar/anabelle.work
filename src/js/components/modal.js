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

  const wobotModal = document.getElementById('wobotModal');
  const openWobotButton = document.querySelector('.dropdown-menu a[href="case-study-4.html"]');
  const closeWobotButton = document.getElementById('closeWobotModal');

  const moreModal = document.getElementById('moreModal');
  const openMoreButton = document.querySelector('.dropdown-menu a[href="case-study-5.html"]');
  const closeMoreButton = document.getElementById('closeMoreModal');

  // Timeline Modal Handlers
  if (openTimelineButton) {
    openTimelineButton.addEventListener('click', function(e) {
      e.preventDefault();
      timelineModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      // Track Timeline view
      gtag('config', 'G-YOUR-ID', {
        'page_title': 'Timeline',
        'page_path': '/timeline'
      });
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
      // Track About Me view
      gtag('config', 'G-YOUR-ID', {
        'page_title': 'About Me',
        'page_path': '/about'
      });
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
      // Track Desjardins case study view
      gtag('config', 'G-YOUR-ID', {
        'page_title': 'Desjardins Case Study',
        'page_path': '/case-studies/desjardins'
      });
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
      // Track Grrunch case study view
      gtag('config', 'G-YOUR-ID', {
        'page_title': 'Grrunch Case Study',
        'page_path': '/case-studies/grrunch'
      });
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
      // Track Turo case study view
      gtag('config', 'G-YOUR-ID', {
        'page_title': 'Turo Case Study',
        'page_path': '/case-studies/turo'
      });
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

  // Wobot Modal Handlers
  if (openWobotButton) {
    openWobotButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation(); // Prevent dropdown from closing

      // Close any open dropdowns
      const dropdowns = document.querySelectorAll('.dropdown-menu');
      dropdowns.forEach(dropdown => dropdown.classList.remove('show'));

      wobotModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      // Track Wobot case study view
      gtag('config', 'G-YOUR-ID', {
        'page_title': 'Wobot Case Study',
        'page_path': '/case-studies/wobot'
      });
    });
  }

  if (closeWobotButton) {
    closeWobotButton.addEventListener('click', function() {
      wobotModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (wobotModal) {
    wobotModal.addEventListener('click', function(e) {
      if (e.target === wobotModal) {
        wobotModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // More Modal Handlers
  if (openMoreButton) {
    openMoreButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation(); // Prevent dropdown from closing

      // Close any open dropdowns
      const dropdowns = document.querySelectorAll('.dropdown-menu');
      dropdowns.forEach(dropdown => dropdown.classList.remove('show'));

      moreModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      // Track More Projects view
      gtag('config', 'G-YOUR-ID', {
        'page_title': 'More Projects',
        'page_path': '/case-studies/more'
      });
    });
  }

  if (closeMoreButton) {
    closeMoreButton.addEventListener('click', function() {
      moreModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (moreModal) {
    moreModal.addEventListener('click', function(e) {
      if (e.target === moreModal) {
        moreModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Close modals with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const modals = [timelineModal, aboutMeModal, desjardinsModal, grrunchModal, turoModal, wobotModal, moreModal];
      modals.forEach(modal => {
        if (modal && modal.classList.contains('active')) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }
  });
});
