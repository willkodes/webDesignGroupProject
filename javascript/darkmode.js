const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const containers = document.querySelectorAll('.container');
const navbar = document.querySelectorAll('.navbar');
const darkModeButton = document.getElementById('dark-mode');

// Check if dark mode preference is stored in localStorage
const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

// Set initial dark mode state based on localStorage or default to false
if (darkModeEnabled) {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    // Toggle dark mode on click
    body.classList.toggle('dark-mode');
    containers.forEach(container => {
        container.classList.toggle('dark-mode');
    });
    navbar.forEach(navbar => {
        navbar.classList.toggle('dark-mode');
    });

    // Toggle text color for elements with class 'dark-mode-class'
    const elementsToStyle = document.querySelectorAll('.dark-mode-class');
    elementsToStyle.forEach(element => {
        element.classList.toggle('dark-mode-text');
    });

    // Store dark mode preference in localStorage
    localStorage.setItem('darkModeEnabled', body.classList.contains('dark-mode'));
});

function enableDarkMode() {
    // Enable dark mode by adding appropriate classes
    body.classList.add('dark-mode');
    containers.forEach(container => {
        container.classList.add('dark-mode');
    });
    navbar.forEach(navbar => {
        navbar.classList.add('dark-mode');
    });

    // Toggle text color for elements with class 'dark-mode-class'
    const elementsToStyle = document.querySelectorAll('.dark-mode-class');
    elementsToStyle.forEach(element => {
        element.classList.add('dark-mode-text');
    });
}
