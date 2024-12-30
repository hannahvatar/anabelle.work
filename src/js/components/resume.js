document.addEventListener('DOMContentLoaded', function() {
  const resumeOptionsBtn = document.getElementById('resumeOptionsBtn');
  const resumeDropdownContent = document.getElementById('resumeDropdownContent');
  const viewOnlineBtn = document.getElementById('viewOnlineBtn');
  const printResumeBtn = document.getElementById('printResumeBtn');
  const resumePreviewModal = document.getElementById('resumePreviewModal');
  const closePreviewBtn = document.getElementById('closePreviewBtn');

  // Toggle dropdown
  resumeOptionsBtn.addEventListener('click', function(e) {
    resumeDropdownContent.classList.toggle('show');
    e.stopPropagation();
  });

  // Close dropdown when clicking outside
  window.addEventListener('click', function() {
    if (resumeDropdownContent.classList.contains('show')) {
      resumeDropdownContent.classList.remove('show');
    }
  });

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
});
