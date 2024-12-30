document.addEventListener('DOMContentLoaded', function() {
  const resumeOptionsBtn = document.getElementById('resumeOptionsBtn');
  const resumeDropdownContent = document.getElementById('resumeDropdownContent');
  const viewOnlineBtn = document.getElementById('viewOnlineBtn');
  const printResumeBtn = document.getElementById('printResumeBtn');
  const resumePreviewModal = document.getElementById('resumePreviewModal');
  const closePreviewBtn = document.getElementById('closePreviewBtn');

  // Remove click event for dropdown toggle
  // Hover functionality will be handled by CSS

  // View Resume Online (only active on desktop)
  viewOnlineBtn.addEventListener('click', function(e) {
    e.preventDefault();

    // Check if it's a desktop view
    if (window.innerWidth > 768) {
      resumeDropdownContent.classList.remove('show');
      resumePreviewModal.style.display = 'block';
    }
  });

  // Close Preview Modal
  closePreviewBtn.addEventListener('click', function() {
    resumePreviewModal.style.display = 'none';
  });

  // Close modal when clicking outside the content
  resumePreviewModal.addEventListener('click', function(e) {
    if (e.target === resumePreviewModal) {
      resumePreviewModal.style.display = 'none';
    }
  });

  // Print Resume
  printResumeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    resumeDropdownContent.classList.remove('show');

    // Direct link to PDF for printing
    const pdfUrl = 'src/images/adubois-resume.pdf';

    // Open PDF in a new window for printing
    const printWindow = window.open(pdfUrl, '_blank');

    // Attempt to trigger print dialog
    if (printWindow) {
      printWindow.addEventListener('load', function() {
        printWindow.print();
      });
    }
  });

  // Optional: Close dropdown when clicking anywhere else on the page
  window.addEventListener('click', function(e) {
    // Check if the click is outside the dropdown
    if (!resumeDropdownContent.contains(e.target) &&
        e.target !== resumeOptionsBtn) {
      resumeDropdownContent.classList.remove('show');
    }
  });
});
