function showPage(sectionId) {
  document.querySelectorAll('section').forEach(section => {
    section.style.display = 'none';
  });

  const selectedSection = document.querySelector(`#${sectionId}`);
  
  if (selectedSection) {
    selectedSection.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('button').forEach(button => {
    button.onclick = function() {
      showPage(this.dataset.page);
    };
  });
});