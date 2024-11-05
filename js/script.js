window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("floating");
    } else {
        header.classList.remove("floating");
    }
});

document.querySelector(".logo").addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.querySelector(".home").addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 1080,
        behavior: "smooth"
    });
});

const modal = document.getElementById("dashboard-modal");
const modalContent = document.querySelector(".modal-content");
const closeButton = document.querySelector(".close-button");

// Überprüfen, ob alle Elemente vorhanden sind
if (!modal) console.error("Modal-Element nicht gefunden.");
if (!modalContent) console.error("Modal-Inhalts-Element nicht gefunden.");
if (!closeButton) console.error("Schließen-Button nicht gefunden.");

// Funktion zum Öffnen des Modals
function openModal() {
    if (modal) {
        modal.style.display = "flex";
        modal.classList.remove("fade-out");
        modal.classList.add("fade-in");
        console.log("Modal geöffnet.");
    } else {
        console.error("Modal-Element ist nicht definiert.");
    }
}

// Funktion zum Schließen des Modals
function closeModal() {
    if (modal) {
        modal.classList.remove("fade-in");
        modal.classList.add("fade-out");
        console.log("Modal wird geschlossen.");

        // Modal verstecken nach der Animation oder direkt
        modal.addEventListener("animationend", handleAnimationEnd, { once: true });
    } else {
        console.error("Modal-Element ist nicht definiert.");
    }
}

// Funktion zur Behandlung des Animation-Ende-Events
function handleAnimationEnd() {
    modal.style.display = "none";
    modal.classList.remove("fade-out");
    console.log("Modal vollständig ausgeblendet und versteckt.");
}

// Event Listener für den Dashboard-Button
const dashboardButton = document.getElementById("open-dashboard-button");
if (dashboardButton) {
    dashboardButton.addEventListener("click", openModal);
    console.log("Dashboard-Button Event Listener hinzugefügt.");
} else {
    console.error("Dashboard-Button mit der ID 'open-dashboard-button' nicht gefunden.");
}

// Event Listener für den Schließen-Button im Modal
if (closeButton) {
    closeButton.addEventListener("click", closeModal);
    console.log("Schließen-Button Event Listener hinzugefügt.");
} else {
    console.error("Schließen-Button nicht gefunden.");
}

// Event Listener für Klicks außerhalb des Modal-Inhalts
if (modal) {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
            console.log("Klick außerhalb des Modals erkannt. Modal wird geschlossen.");
        }
    });
}

function copyToClipboard() {
    const textToCopy = "play.cookieattack.de";
    const copyIcon = document.getElementById("copyIcon");

    navigator.clipboard.writeText(textToCopy).then(() => {
        // Wechsle das Icon und füge Animation hinzu
        copyIcon.src = "img/copied-icon.png";
        copyIcon.classList.add("icon-copied");

        // Nach 1 Sekunde zurück zum Original-Icon und Animation erneut abspielen
        setTimeout(() => {
            copyIcon.classList.remove("icon-copied");
            copyIcon.offsetWidth; // Trick, um das Entfernen der Klasse zu registrieren
            copyIcon.src = "img/copy-icon.png"; // Setze Original-Icon zurück
            copyIcon.classList.add("icon-copied"); // Animation erneut abspielen
        }, 1000);
    }).catch(err => {
        console.error("Kopieren fehlgeschlagen", err);
    });
}

const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
const particleCount = 100;
const minDistance = 50; // Mindestabstand zwischen Partikeln
let mouseX = null;
let mouseY = null;

// Canvas-Größe anpassen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Mausposition aktualisieren
canvas.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Partikel erstellen
function createParticles() {
    particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5, // kleine zufällige Geschwindigkeit
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
    }));
}

// Funktion, um Partikel zur Maus zu ziehen
function updateParticles() {
    particles.forEach((p, i) => {
        // Berechne den Abstand zur Maus und ziehe die Partikel in die Richtung der Maus
        if (mouseX && mouseY) {
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const distanceToMouse = Math.sqrt(dx * dx + dy * dy);
            
            // Zieheffekt abhängig vom Abstand
            const attractionForce = Math.min(5 / distanceToMouse, 0.1); // Anpassen der Stärke des Zieheffekts
            p.vx += dx * attractionForce;
            p.vy += dy * attractionForce;
        }

        // Update Partikelposition und Geschwindigkeit
        p.x += p.vx;
        p.y += p.vy;
        p.vx = Math.min(Math.max(p.vx, -0.3), 0.3); // Begrenzung der Geschwindigkeit
        p.vy = Math.min(Math.max(p.vy, -0.3), 0.3);

        // Begrenzung der Partikel am Canvas-Rand
        if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx;
        if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy;

        // Mindestabstand zwischen Partikeln sicherstellen
        particles.forEach((other, j) => {
            if (i !== j) {
                const dx = p.x - other.x;
                const dy = p.y - other.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < minDistance) {
                    const angle = Math.atan2(dy, dx);
                    p.vx += Math.cos(angle) * 0.05;
                    p.vy += Math.sin(angle) * 0.05;
                }
            }
        });
    });
}

// Partikel zeichnen
function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#ff7f00'; // Orange Farbe der Partikel
        ctx.fill();
    });
}

// Animation starten
function animateParticles() {
    updateParticles();
    drawParticles();
    requestAnimationFrame(animateParticles);
}

// Partikel erstellen und Animation starten
createParticles();
animateParticles();