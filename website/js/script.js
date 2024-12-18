const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Function to show specific page content
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.style.display = 'none');

  // Show the selected page
  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    if (pageId === 'about') {
      // Load the about us content
      fetch('about us.html')
        .then(response => response.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const mainContent = doc.querySelector('main').innerHTML;
          selectedPage.innerHTML = mainContent;
          selectedPage.style.display = 'block';
        })
        .catch(error => console.error('Error loading about us content:', error));
    } else if (pageId === 'faq') {
      // Load the FAQ content
      fetch('faq.html')
        .then(response => response.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const mainContent = doc.querySelector('section').innerHTML;
          selectedPage.innerHTML = mainContent;
          selectedPage.style.display = 'block';
          initializeFAQ(); // Initialize FAQ functionality
        })
        .catch(error => console.error('Error loading FAQ content:', error));
    } else if (pageId === 'feature') {
      selectedPage.style.display = 'block';
    } else {
      selectedPage.style.display = 'block';
    }
  }
}

// Function to initialize the contact page
function initializeContactPage() {
  const contactSection = document.getElementById('contact');
  
  // Create contact form
  const contactForm = document.createElement('form');
  contactForm.id = 'contact-form';
  contactForm.innerHTML = `
    <h3>Contact Us</h3>
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <textarea name="message" placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
  `;
  contactSection.appendChild(contactForm);

  // Form submission
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    console.log('Form submitted:', Object.fromEntries(formData));
    alert('Thank you for your message. We will get back to you soon!');
    this.reset();
  });

  // Add map
  const mapContainer = document.createElement('div');
  mapContainer.id = 'map';
  mapContainer.style.width = '100%';
  mapContainer.style.height = '400px';
  contactSection.appendChild(mapContainer);

  // Initialize the map (using Google Maps as an example)
  // Note: You'll need to include the Google Maps API script in your HTML file
  // and replace 'YOUR_API_KEY' with an actual Google Maps API key
  const script = document.createElement('script');
  script.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&region=kenya&callback=initMap"; // Added missing semicolon
  script.async = true; // Ensure this line is correctly placed
  script.defer = true; // Ensure this line is correctly placed
  document.head.appendChild(script); // Ensure this line is correctly placed

  window.initMap = function() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -1.390308688732284, lng: 36.74776110897923 }, // Nairobi coordinates
      zoom: 14
    });
    new google.maps.Marker({
      position: { lat: 51.5074, lng: -0.1278 },
      map: map,
      title: 'Our Location'
    });
  };
}

// Call the function when the contact page is shown
document.addEventListener('DOMContentLoaded', () => {
  const contactLink = document.querySelector('a[onclick="showPage(\'contact\')"]');
  if (contactLink) {
    contactLink.addEventListener('click', initializeContactPage);
  }
});

// Home slide functionality
document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  
  function showSlide(index) {
      slides.forEach(slide => slide.style.display = 'none');
      slides[index].style.display = 'flex';
  }
  
  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }
  
  showSlide(currentSlide);
  setInterval(nextSlide, 5000); // Change slide every 5 seconds
});

// Function to initialize FAQ functionality
function initializeFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });
}

function showFeatureDetail(featureName) {
  showPage('feature'); // First, show the feature page

  const featureDetails = document.getElementById('featureDetails');
  featureDetails.style.display = 'block';
  
  // Hide all feature details
  const allDetails = featureDetails.children;
  for (let i = 0; i < allDetails.length; i++) {
    allDetails[i].style.display = 'none';
  }
  
  // Show the selected feature detail
  const detailElement = document.getElementById(`${featureName}Detail`);
  if (detailElement) {
    detailElement.style.display = 'block';
    
    // Scroll to the feature detail
    setTimeout(() => {
      detailElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100); // Small delay to ensure the page has loaded
  }
}

// Modify the showPage function to handle the 'feature' page
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.style.display = 'none');

  // Show the selected page
  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    if (pageId === 'about') {
      // Load the about us content
      fetch('about us.html')
        .then(response => response.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const mainContent = doc.querySelector('main').innerHTML;
          selectedPage.innerHTML = mainContent;
          selectedPage.style.display = 'block';
        })
        .catch(error => console.error('Error loading about us content:', error));
    } else if (pageId === 'faq') {
      // Load the FAQ content
      fetch('faq.html')
        .then(response => response.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const mainContent = doc.querySelector('section').innerHTML;
          selectedPage.innerHTML = mainContent;
          selectedPage.style.display = 'block';
          initializeFAQ(); // Initialize FAQ functionality
        })
        .catch(error => console.error('Error loading FAQ content:', error));
    } else if (pageId === 'feature') {
      selectedPage.style.display = 'block';
    } else {
      selectedPage.style.display = 'block';
    }
  }
}

// Home slide functionality
document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  
  function showSlide(index) {
      slides.forEach(slide => slide.style.display = 'none');
      slides[index].style.display = 'flex';
  }
  
  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }
  
  showSlide(currentSlide);
  setInterval(nextSlide, 5000); // Change slide every 5 seconds
});

// Function to initialize FAQ functionality
function initializeFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });
}

// ... (keep all existing code after this point) ...




