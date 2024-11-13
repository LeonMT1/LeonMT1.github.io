let images = ["img/1.webp", "img/2.webp", "img/3.webp"];
let currentIndex = 0;
const heroSection = document.querySelector('.hero');

function changeBackground() {
  heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 5000);
changeBackground();  // Sofort beim Laden starten
