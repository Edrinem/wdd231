document.addEventListener("DOMContentLoaded", () => {
    // Set timestamp field value
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    // Update footer information
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;

    // Modal functionality
    const modals = {
        "np-modal": "Non-Profit Membership benefits...", 
        "bronze-modal": "Bronze Membership benefits...", 
        "silver-modal": "Silver Membership benefits...", 
        "gold-modal": "Gold Membership benefits..."
    };

    function openModal(modalId) {
        alert(modals[modalId] || "No details available.");
    }

    document.querySelectorAll(".card button").forEach(button => {
        button.addEventListener("click", (event) => {
            const modalId = event.target.getAttribute("onclick").match(/'([^']+)'/)[1];
            openModal(modalId);
        });
    });
});
