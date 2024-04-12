document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleAside');
    const aside = document.querySelector('aside');

    toggleButton.addEventListener('click', function () {
        aside.classList.toggle('slide-out');
    });

    // Add event listener for scroll
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const threshold = 100; // Adjust as needed, this is the scroll threshold to trigger the slide down

        if (scrollPosition > threshold) {
            toggleButton.classList.add('slide-down');
        } else {
            toggleButton.classList.remove('slide-down');
        }
    });
});
