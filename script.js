// Welcome message
console.log("Welcome to my Portfolio!");

// Button interaction
const contactButton = document.querySelector(".btn");

contactButton.addEventListener("click", function () {
  alert("Thank you for visiting my portfolio!");
});

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  } else {
    header.style.boxShadow = "none";
  }
});