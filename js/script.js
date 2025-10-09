
      // Initialize AOS Animation
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      });

      // DOM Elements
      const navbar = document.getElementById("navbar");
      const navLinks = document.getElementById("nav-links");
      const hamburger = document.getElementById("hamburger");
      const themeToggle = document.getElementById("theme-toggle");
      const backToTopBtn = document.getElementById("back-to-top");
      const contactForm = document.getElementById("contact-form");

      // Toggle Mobile Navigation
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
      });

      // Close mobile menu when clicking a link
      document.querySelectorAll(".nav-link a").forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navLinks.classList.remove("active");
        });
      });

      // Theme Toggler
      themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Toggle icon
        const icon = themeToggle.querySelector("i");
        if (document.body.classList.contains("dark-mode")) {
          icon.classList.replace("fa-moon", "fa-sun");
          localStorage.setItem("theme", "dark");
        } else {
          icon.classList.replace("fa-sun", "fa-moon");
          localStorage.setItem("theme", "light");
        }
      });

      // Check for saved theme preference
      document.addEventListener("DOMContentLoaded", () => {
        const savedTheme = localStorage.getItem("theme");
        const icon = themeToggle.querySelector("i");

        if (savedTheme === "dark") {
          document.body.classList.add("dark-mode");
          icon.classList.replace("fa-moon", "fa-sun");
        }
      });

      // Typing animation
      document.addEventListener("DOMContentLoaded", () => {
        new Typed("#typing-text", {
          strings: [
            "Web Developer",
            "UI/UX Designer",
            "Frontend Developer",
            "Creative Coder",
          ],
          typeSpeed: 80,
          backSpeed: 40,
          backDelay: 1500,
          loop: true,
        });
      });

      // Active navigation on scroll
      window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        const navItems = document.querySelectorAll(".nav-link");

        let current = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
          }
        });

        navItems.forEach((item) => {
          item.classList.remove("active");
          if (item.querySelector("a").getAttribute("href") === `#${current}`) {
            item.classList.add("active");
          }
        });

        // Show/hide back to top button
        if (window.scrollY > 300) {
          backToTopBtn.classList.add("visible");
        } else {
          backToTopBtn.classList.remove("visible");
        }
      });

      // Contact Form Submit - This is a prototype so it just shows an alert
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert(
          "Successfully Submitted."
        );
        contactForm.reset();
      });
   