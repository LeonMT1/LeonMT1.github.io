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
});
