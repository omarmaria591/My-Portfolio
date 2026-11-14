
const trackButton = document.getElementById("trackBtn");
const trackingInput = document.getElementById("trackingInput");
const trackingResult = document.getElementById("trackingResult");

const shipments = {
    "123456": "Your package is on its way 🚚",
    "654321": "Your package has been delivered ✅",
    "111222": "Your package is being prepared 📦"
};

trackButton.addEventListener("click", function () {
    const number = trackingInput.value.trim();

    if (number === "") {
        trackingResult.textContent = "Please enter a tracking number.";
        trackingResult.style.color = "red";
    } 
    else if (shipments[number]) {
        trackingResult.textContent = shipments[number];
        trackingResult.style.color = "green";
    } 
    else {
        trackingResult.textContent = "Tracking number not found.";
        trackingResult.style.color = "red";
    }
});
trackingInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        trackButton.click();
    }
});