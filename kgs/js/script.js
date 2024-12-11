window.addEventListener('scroll', function() {
  if (window.innerWidth <= 768) {
    var scrollTop = window.scrollY;
    var docHeight = document.body.scrollHeight - window.innerHeight;
    var scrollPercent = (scrollTop / docHeight) * 100;

    var header = document.querySelector('header');
    if (scrollPercent > 20) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
  }
});

let images = ["img/1.webp", "img/2.webp", "img/3.webp"];
let currentIndex = 0;
const heroSection = document.querySelector('.hero');

if (heroSection) {
  function changeBackground() {
    heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(changeBackground, 5000);
  changeBackground();
}

const toggleButton = document.getElementById('dark-mode-toggle');

if (toggleButton) {
  let currentTheme = localStorage.getItem('theme');

  if (currentTheme === null) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      currentTheme = 'dark';
    } else {
      currentTheme = 'light';
    }
  }

  applyTheme(currentTheme);

  toggleButton.addEventListener('click', function() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    applyTheme(currentTheme);
  });

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      toggleButton.textContent = '☀️';
    } else {
      document.body.classList.remove('dark-mode');
      toggleButton.textContent = '🌙';
    }
  }
}

document.getElementById('toggle-text').addEventListener('click', function() {
  var extraText = document.getElementById('extra-text');
  if (extraText.style.maxHeight === '0px' || extraText.style.maxHeight === '') {
    extraText.style.maxHeight = extraText.scrollHeight + 'px';
    this.textContent = 'Weniger anzeigen';
  } else {
    extraText.style.maxHeight = '0px';
    this.textContent = 'Mehr anzeigen';
  }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll to top button
var scrollToTopBtn = document.getElementById('scroll-to-top');
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});