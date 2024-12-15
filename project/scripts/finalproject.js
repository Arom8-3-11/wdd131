document.addEventListener("DOMContentLoaded", function() {
    // Update current year
    let currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    // Update last modified date
    let lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

    // Handle form submission
    const form = document.getElementById('recipeForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        window.location.href = 'submit.php';
    });

    const mainnav = document.querySelector('.navigation');
    const hamButton = document.querySelector('#menu');
    hamButton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hamButton.classList.toggle('show');
    });
});
