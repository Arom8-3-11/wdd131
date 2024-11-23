let currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;

// Get the last modified date
let lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModified}`;

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
        let windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(2); // Return wind chill rounded to two decimal places
    } else {
        return "N/A"; // Wind chill is not applicable
    }
}

// Example temperature and wind speed values
let temperature = 30; // Fahrenheit
let windSpeed = 10; // Miles per hour

// Calculate wind chill
let windChill = calculateWindChill(temperature, windSpeed);

// Display wind chill in the "weather" div
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("windChill").textContent = `Wind Chill: ${windChill} °F`;
});