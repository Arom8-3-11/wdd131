let currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;

// Get the last modified date
let lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModified}`;