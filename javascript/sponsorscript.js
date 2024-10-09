const image = document.querySelector('img');

function fadeInOut() {
    image.style.opacity = 1; /* Fade-In */
    setTimeout(() => {
        image.style.opacity = 0; /* Fade-Out */
    }, 10000); // Nach 10 Sekunden
}

fadeInOut(); // Starte die Animation beim Laden der Seite
setInterval(fadeInOut, 20000); // Wiederhole die Animation alle 20 Sekunden