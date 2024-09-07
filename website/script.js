const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Function to show specific page content
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.style.display = 'none';
  });
  document.getElementById(pageId).style.display = 'block';
}

// FAQ Toggle Functionality
function toggleAnswer(question) {
  const answer = question.nextElementSibling;
  if (answer.style.display === 'block') {
    answer.style.display = 'none';
  } else {
    answer.style.display = 'block';
  }
}
