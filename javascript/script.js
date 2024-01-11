document.addEventListener('DOMContentLoaded', function () {
    const notificationContainer = document.getElementById('notificationContainer');

    function createNotification() {
        notificationContainer.style.display = 'flex';
        notificationContainer.classList.add('show');
        setTimeout(function () {
            hideNotification();
        }, 3000);
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

    function closeNotification() {
        hideNotification();
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
            }};

    // Projekt-Slider
    let currentProject = 1;
    const totalProjects = document.querySelectorAll('.project').length;
    showProject(currentProject, totalProjects);

    function showProject(index, totalProjects) {
        document.querySelectorAll('.project').forEach(project => {
            project.style.display = 'none';
        });

        document.getElementById(`project${index}`).style.display = 'flex';

        if (index < 1) {
            currentProject = totalProjects;
        } else if (index > totalProjects) {
            currentProject = 1;
        }
    }

    function nextProject() {
        currentProject = (currentProject % totalProjects) + 1;
        showProject(currentProject, totalProjects);
    }

    function prevProject() {
        currentProject = (currentProject - 2 + totalProjects) % totalProjects + 1;
        showProject(currentProject, totalProjects);
    }

    // Automatischer Projekt-Slider
    setInterval(function () {
        nextProject();
    }, 5000);

    // Event Listener für Projekt-Slider
    document.querySelector('.next-btn').addEventListener('click', function () {
        nextProject();
    });

    document.querySelector('.prev-btn').addEventListener('click', function () {
        prevProject();
    });

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
