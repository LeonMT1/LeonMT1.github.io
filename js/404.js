const canvas404 = document.getElementById('particle-canvas-404');
const ctx404 = canvas404.getContext('2d');
let particles404 = [];
const particleCount404 = 100;
const minDistance404 = 50;
let mouseX404 = null;
let mouseY404 = null;

// Canvas-Größe anpassen
function resizeCanvas404() {
    canvas404.width = window.innerWidth;
    canvas404.height = window.innerHeight;
}
resizeCanvas404();
window.addEventListener('resize', resizeCanvas404);

// Mausposition aktualisieren
canvas404.addEventListener('mousemove', (e) => {
    mouseX404 = e.clientX;
    mouseY404 = e.clientY;
});

// Partikel erstellen
function createParticles404() {
    particles404 = Array.from({ length: particleCount404 }, () => ({
        x: Math.random() * canvas404.width,
        y: Math.random() * canvas404.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
    }));
}

// Partikel zur Maus ziehen
function updateParticles404() {
    particles404.forEach((p, i) => {
        if (mouseX404 && mouseY404) {
            const dx = mouseX404 - p.x;
            const dy = mouseY404 - p.y;
            const distanceToMouse = Math.sqrt(dx * dx + dy * dy);
            const attractionForce = Math.min(5 / distanceToMouse, 0.1);
            p.vx += dx * attractionForce;
            p.vy += dy * attractionForce;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx = Math.min(Math.max(p.vx, -0.3), 0.3);
        p.vy = Math.min(Math.max(p.vy, -0.3), 0.3);

        if (p.x < 0 || p.x > canvas404.width) p.vx = -p.vx;
        if (p.y < 0 || p.y > canvas404.height) p.vy = -p.vy;
    });
}

function drawParticles404() {
    ctx404.clearRect(0, 0, canvas404.width, canvas404.height);
    particles404.forEach(p => {
        ctx404.beginPath();
        ctx404.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx404.fillStyle = '#ff7f00';
        ctx404.fill();
    });
}

function animateParticles404() {
    updateParticles404();
    drawParticles404();
    requestAnimationFrame(animateParticles404);
}

createParticles404();
animateParticles404();
