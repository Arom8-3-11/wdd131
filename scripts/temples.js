let currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;

// Get the last modified date
let lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModified}`;

const mainnav = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');
// const mainnav = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hamButton.classList.toggle('show');
});