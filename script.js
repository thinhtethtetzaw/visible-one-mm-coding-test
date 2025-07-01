document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelectorAll(".nav-link");

  mobileMenuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("mobile-open");
    hamburger.classList.toggle("active");
  });

  // Close mobile menu when clicking on nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("mobile-open");
      hamburger.classList.remove("active");
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (
      !e.target.closest(".nav") &&
      navMenu.classList.contains("mobile-open")
    ) {
      navMenu.classList.remove("mobile-open");
      hamburger.classList.remove("active");
    }
  });

  // Close mobile menu on window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("mobile-open");
      hamburger.classList.remove("active");
    }
  });

  // Testimonial Cards
  const testimonialCards = document.querySelectorAll(".testimonial-card");

  testimonialCards.forEach((card) => {
    const border = card.querySelector(".testimonial-border");

    card.addEventListener("mouseenter", function () {
      card.style.setProperty("--opacity", "1");
    });

    card.addEventListener("mouseleave", function () {
      card.style.setProperty("--opacity", "1");
      card.style.setProperty("--x", "0px");
      card.style.setProperty("--y", "0px");
    });

    card.addEventListener("mousemove", function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });
  });
});
