// script.js

// Function to display the last modified date in the footer
function showLastModified() {
    const lastModifiedDate = document.lastModified; // Get the last modified date of the document
    document.getElementById("last-modified").textContent = lastModifiedDate; // Insert the date into the footer
}

// Run the function when the page loads
window.onload = showLastModified;

