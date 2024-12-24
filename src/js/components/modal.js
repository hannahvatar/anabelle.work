document.addEventListener('DOMContentLoaded', function() {
  // Career Timeline Modal
  const timelineModal = document.getElementById('timelineModal');
  const openTimelineButton = document.getElementById('openTimelineModal');
  const closeTimelineButton = document.getElementById('closeTimelineModal');

  // About Me Modal
  const aboutMeModal = document.getElementById('aboutMeModal');
  const openAboutMeButton = document.getElementById('openAboutMeModal');
  const closeAboutMeButton = document.getElementById('closeAboutMeModal');

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
    }
  });
});
