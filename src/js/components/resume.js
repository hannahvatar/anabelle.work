document.addEventListener('DOMContentLoaded', function() {
  const previewButton = document.querySelector('.preview-button');
  const previewModal = document.querySelector('.resume-preview');
  const closePreviewButton = document.getElementById('closePreviewButton');

  // Show the modal when the preview button is clicked
  previewButton.addEventListener('click', function() {
    previewModal.style.display = 'block';  // Show the modal
  });

  // Close the modal when clicking outside the modal content
  previewModal.addEventListener('click', function(e) {
    if (e.target === previewModal) {
      previewModal.style.display = 'none';  // Close the modal
    }
  });

  // Close the modal when the close button is clicked
  closePreviewButton.addEventListener('click', function() {
    previewModal.style.display = 'none';  // Close the modal
  });
});
