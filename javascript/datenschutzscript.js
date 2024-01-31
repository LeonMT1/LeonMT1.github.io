document.addEventListener('DOMContentLoaded', function () {
    // Navbar und Sidebar
    const menu = document.querySelector('.menu');
    const navbar = document.querySelector('.navbar');
    const sidebar = document.getElementById('sidebar');

    menu.addEventListener('click', function () {
        toggleSidebar();
    });

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

    let mybutton = document.getElementById("myBtn");

    window.addEventListener('scroll', scrollFunction);

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
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
