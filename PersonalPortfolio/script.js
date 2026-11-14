
// Welcome Message
window.addEventListener("load", function () {
    console.log("Welcome to Omar's Portfolio!");
});

// Navbar Scroll Effect
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.4)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Project Cards Animation
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", function () {
        card.style.transform = "translateY(0)";
    });
});
