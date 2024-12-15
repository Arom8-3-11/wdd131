document.addEventListener("DOMContentLoaded", function() {
    let currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
    let lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

    const form = document.getElementById('recipeForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        window.location.href = 'submit.php';
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        window.location.href = 'contact-question.html';
    });
});

const mainnav = document.getElementById('navigation');
const hamButton = document.getElementById('menu');
if (mainnav && hamButton) {
    hamButton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hamButton.classList.toggle('show');

    });
}
