// Mobile Menu Toggle

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Button Message

function showMessage() {
  alert("Thank you for visiting my portfolio!");
}