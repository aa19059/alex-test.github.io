document.addEventListener("DOMContentLoaded", () => {
  const hamMenu = document.getElementById("ham-menu");
  const offScreenMenu = document.getElementById("off-screen-menu");
  const dropdownLinks = document.querySelectorAll(".off-screen-menu .dropdown > a");

  // Toggle burger menu (mobile)
  hamMenu.addEventListener("click", () => {
    offScreenMenu.classList.toggle("active");
    hamMenu.classList.toggle("active");
  });

  // Toggle dropdown inside mobile menu
  dropdownLinks.forEach(link => {
    link.addEventListener("click", e => {
      // Only apply on mobile widths
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent = link.parentElement;

        // If dropdown is already open → close it
        if (parent.classList.contains("active")) {
          parent.classList.remove("active");
        } else {
          // Close any other open dropdowns
          document.querySelectorAll(".off-screen-menu .dropdown.active")
            .forEach(d => d.classList.remove("active"));
          parent.classList.add("active");
        }
      }
    });
  });

  // ✅ Close menu or dropdown when tapping outside
  document.addEventListener("click", e => {
    const isInsideMenu = e.target.closest("#off-screen-menu");
    const isBurger = e.target.closest("#ham-menu");
    const isDropdown = e.target.closest(".off-screen-menu .dropdown");

    // Close mobile menu if clicking outside
    if (!isInsideMenu && !isBurger && offScreenMenu.classList.contains("active")) {
      offScreenMenu.classList.remove("active");
      hamMenu.classList.remove("active");
    }

    // Close dropdown if tapping outside or on dropdown itself (for mobile)
    if (!isDropdown && window.innerWidth <= 768) {
      document.querySelectorAll(".off-screen-menu .dropdown.active")
        .forEach(drop => drop.classList.remove("active"));
    }
  });
});

window.addEventListener('scroll', () => {
  document.querySelectorAll('.feature-text, .gallery-item').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
// Project slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

function changeSlide(n) {
  slideIndex += n - 1;
  showSlides();
}

