
// Welcome Message
window.addEventListener("load", function () {
    console.log("Welcome to MarkePro!");
});

// Contact Button
const contactButton = document.querySelector(".contact .btn");

contactButton.addEventListener("click", function () {
    alert("Thank you for contacting MarkePro! We will get back to you soon.");
});

// Navbar Scroll Effect
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.12)";
    } else {
        header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.06)";
    }
});
