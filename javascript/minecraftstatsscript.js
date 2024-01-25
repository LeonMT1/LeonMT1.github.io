document.addEventListener('DOMContentLoaded', function () {
    const notificationContainer = document.getElementById('notificationContainer');
    document.body.classList.add("loaded");

    function createNotification() {
        notificationContainer.style.display = 'flex';
        notificationContainer.classList.add('show');
        setTimeout(hideNotification, 3000);
    }

    function hideNotification() {
        notificationContainer.classList.remove('show');
        setTimeout(function () {
            notificationContainer.style.display = 'none';
            showContent();
        }, 500);
    }

    function showContent() {
        const contentElements = document.querySelectorAll('.content-to-show');
        contentElements.forEach(function (element) {
            element.style.opacity = '0';
            element.style.display = 'flex';
            setTimeout(function () {
                element.style.opacity = '1';
            }, 100);
        });
    }

    // Überprüfen, ob das Cookie gesetzt ist
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Überprüfen, ob das Cookie existiert
    const notificationShown = getCookie('notificationShown');

    // Wenn das Cookie nicht existiert, zeige die Benachrichtigung an
    if (!notificationShown) {
        // Starte die Animation
        createNotification();

        // Setze das Cookie, um zu vermerken, dass die Benachrichtigung angezeigt wurde
        document.cookie = 'notificationShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
    }

    if (navigator.onLine) {
        // Der Benutzer hat eine Internetverbindung
        console.log("Online");
    } else {
        // Der Benutzer hat keine Internetverbindung
        console.log("Offline");
    }

    // Navbar und Sidebar
    const menu = document.querySelector('.menu');
    const navbar = document.querySelector('.navbar');
    const sidebar = document.getElementById('sidebar');

    menu.addEventListener('click', toggleSidebar);

    function toggleSidebar() {
        if (sidebar.style.left === '0px') {
            sidebar.style.left = '-400px';
            // Zurücksetzen der Navbar, wenn die Sidebar geschlossen wird
            navbar.style.width = '1800px';
            navbar.style.left = '20px';
        } else {
            sidebar.style.left = '0px';
            // Anpassen der Navbar, wenn die Sidebar geöffnet wird
            navbar.style.width = '1480px';
            navbar.style.left = '350px';
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
    function searchJson() {
        // Lese die ausgewählte JSON-Datei
        const fileInput = document.getElementById('jsonFileInput');
        const file = fileInput.files[0];
    
        if (file) {
            const reader = new FileReader();
    
            reader.onload = function (e) {
                // Parste die JSON-Daten
                const jsonData = JSON.parse(e.target.result);
    
                // Gib den Wert der gesuchten Eigenschaft aus
                const gesuchteEigenschaft = 'minecraft:total_world_time';
                const wert = wertHolen(jsonData, gesuchteEigenschaft);
    
                // Zeige den Wert auf der Webseite an
                const resultContainer = document.getElementById('result');
                resultContainer.innerHTML = `<p>Der Wert von ${gesuchteEigenschaft} ist: ${wert}</p>`;
            };
    
            reader.readAsText(file);
        } else {
            alert('Bitte wähle eine JSON-Datei aus.');
        }
    }
    
    // Funktion, um den Wert einer bestimmten Eigenschaft zu erhalten
    function wertHolen(objekt, eigenschaft) {
        if (objekt.hasOwnProperty(eigenschaft)) {
            return objekt[eigenschaft];
        } else {
            return 'Eigenschaft nicht gefunden';
        }
    }
});
    

    let mybutton = document.getElementById("myBtn");

    window.addEventListener('scroll', scrollFunction);

    function scrollFunction() {
        mybutton.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
    }

    mybutton.addEventListener('click', topFunction);

    function topFunction() {
        scrollToTop();
    }

    function scrollToTop() {
        const startPosition = window.pageYOffset;
        const duration = 500; // milliseconds
        const startTime = performance.now();

        function animateScroll(currentTime) {
            const elapsedTime = currentTime - startTime;

            window.scrollTo(0, easeInOutCubic(elapsedTime, startPosition, -startPosition, duration));

            if (elapsedTime < duration) {
                requestAnimationFrame(animateScroll);
            }
        }

        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        requestAnimationFrame(animateScroll);
    }
});
