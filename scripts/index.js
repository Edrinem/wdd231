document.addEventListener("DOMContentLoaded", function() {
    // Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    
    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active");
    });

    // Footer Year Update
    document.getElementById("year").textContent = new Date().getFullYear();

    // Fetch Weather Data (Mock Example)
    function fetchWeather() {
        document.getElementById("weather-info").textContent = "Sunny, 85°F";
    }
    
    fetchWeather();
});
