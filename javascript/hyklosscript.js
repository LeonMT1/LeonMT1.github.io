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

    document.getElementById('wortMitTooltip1').addEventListener('mouseover', function() {
        document.getElementById('tooltipContainer1').style.display = 'block';
    });
    
    document.getElementById('wortMitTooltip1').addEventListener('mouseout', function() {
        document.getElementById('tooltipContainer1').style.display = 'none';
    });
    document.getElementById('wortMitTooltip2').addEventListener('mouseover', function() {
        document.getElementById('tooltipContainer2').style.display = 'block';
    });
    document.getElementById('wortMitTooltip2').addEventListener('mouseout', function() {
        document.getElementById('tooltipContainer2').style.display = 'none';
    });
    document.getElementById('wortMitTooltip3').addEventListener('mouseover', function() {
        document.getElementById('tooltipContainer3').style.display = 'block';
    });
    document.getElementById('wortMitTooltip3').addEventListener('mouseout', function() {
        document.getElementById('tooltipContainer3').style.display = 'none';
    });
    document.getElementById('wortMitTooltip4').addEventListener('mouseover', function() {
        document.getElementById('tooltipContainer4').style.display = 'block';
    });
    document.getElementById('wortMitTooltip4').addEventListener('mouseout', function() {
        document.getElementById('tooltipContainer4').style.display = 'none';
    });
});
