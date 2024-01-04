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

    // Profil-Slider
    let currentProfile = 1;
    const totalProfiles = document.querySelectorAll('.profile-slide').length;

    function showProfile(index) {
        document.querySelectorAll('.profile-slide').forEach(profile => {
            profile.style.display = 'none';
        });
        document.getElementById(`profile${index}`).style.display = 'flex';
    }

    function nextProfile() {
        currentProfile = (currentProfile % totalProfiles) + 1;
        showProfile(currentProfile);
    }

    function prevProfile() {
        currentProfile = (currentProfile - 2 + totalProfiles) % totalProfiles + 1;
        showProfile(currentProfile);
    }

    // Event Listener für Profil-Slider
    document.querySelector('.next-btn-profile').addEventListener('click', function () {
        nextProfile();
    });

    document.querySelector('.prev-btn-profile').addEventListener('click', function () {
        prevProfile();
    });

    // Initial anzeigen für Projekt- und Profil-Slider
    showProject(currentProject, totalProjects);
    showProfile(currentProfile);
});
