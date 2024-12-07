// let currentYear = new Date().getFullYear();
// document.getElementById("currentYear").innerHTML = currentYear;

// // Get the last modified date
// let lastModified = document.lastModified;
// document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModified}`;
// form.js
document.addEventListener("DOMContentLoaded", function() {
  // Update current year
  let currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;

  // Update last modified date
  let lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

  let reviewCount = localStorage.getItem('reviewCount') || 0;

  // Display the review count
  const reviewCountElement = document.getElementById('reviewCount');
  reviewCountElement.textContent = `You have submitted ${reviewCount} reviews.`;

  // Show the review count message briefly
  reviewCountElement.style.display = 'block';
  setTimeout(() => {
      reviewCountElement.style.display = 'none';
  }, 5000); // Hide the message after 5 seconds

  // Handle form submission
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
      // Increment the review counter in localStorage
      let reviewCount = localStorage.getItem('reviewCount') || 0;
      reviewCount++;
      localStorage.setItem('reviewCount', reviewCount);
  });
});
const products = [
    {
      id: "fc-1888",
      name: "Nissan Rogue SV",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "Dodge Challenger SXT Coupe",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "Ford Edge SE SUV",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "GMC Yukon Denali SUV",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "Subaru Outback Limited Wagon",
      averagerating: 5.0
    }
  ];
// document.addEventListener("DOMContentLoaded", function() {
//   // Get the review count from localStorage
//   let reviewCount = localStorage.getItem('reviewCount') || 0;

//   // Display the review count
//   document.getElementById('reviewCount').textContent = `You have submitted ${reviewCount} reviews.`;
//   const form = document.querySelector('form');
//   form.addEventListener('submit', function(event) {
//       // Increment the review counter in localStorage
//       let reviewCount = localStorage.getItem('reviewCount') || 0;
//       reviewCount++;
//       localStorage.setItem('reviewCount', reviewCount);
//     });
// });