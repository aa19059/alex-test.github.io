// Hamburger toggle for mobile menu
const hamMenu = document.getElementById("ham-menu");
const offScreenMenu = document.getElementById("off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// Mobile dropdown toggle
const mobileDropdowns = document.querySelectorAll(".off-screen-menu .dropdown > a");

mobileDropdowns.forEach(dropdown => {
  dropdown.addEventListener("click", (e) => {
    e.preventDefault(); // prevent jump
    const parent = dropdown.parentElement;
    parent.classList.toggle("active");
  });
});
