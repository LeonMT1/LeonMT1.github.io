document.addEventListener('DOMContentLoaded', function () {
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

    // Initial anzeigen
    let currentProject = 1;
    const totalProjects = document.querySelectorAll('.project').length; // Füge diese Zeile hinzu
    showProject(currentProject, totalProjects); // Füge totalProjects als Parameter hinzu

    function showProject(index, totalProjects) {
        // Alle Projekte ausblenden
        document.querySelectorAll('.project').forEach(project => {
            project.style.display = 'none';
        });

        // Aktuelles Projekt anzeigen
        document.getElementById(`project${index}`).style.display = 'flex';

        // Überprüfen und aktualisieren der totalProjects-Variable
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

    // Event Listener für Pfeilbuttons
    document.querySelector('.next-btn').addEventListener('click', function () {
        nextProject();
    });

    document.querySelector('.prev-btn').addEventListener('click', function () {
        prevProject();
    });

    document.addEventListener('DOMContentLoaded', function () {
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
    
        document.querySelector('.next-btn').addEventListener('click', function () {
            nextProfile();
        });
    
        document.querySelector('.prev-btn').addEventListener('click', function () {
            prevProfile();
        });
    
        // Initial anzeigen
        showProfile(currentProfile);
    });
    
});
