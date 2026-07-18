// ===============================
// Mobile Menu
// ===============================

const menuButton = document.querySelector(".menu-button");
const navigationLinks = document.querySelector(".navigation-links");

menuButton.addEventListener("click", () => {
  navigationLinks.classList.toggle("active");
});

// ===============================
// Close Mobile Menu After Clicking a Link
// ===============================

document.querySelectorAll(".navigation-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navigationLinks.classList.remove("active");
  });
});

// ===============================
// Navbar Shadow on Scroll
// ===============================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navigation-links a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 180;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});

// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
  `
.hero-text,
.hero-image,
.course-card,
.about-image,
.about-text,
.statistics div,
.phone-card,
.image1,
.image2
`,
);

revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(60px)";
  element.style.transition = "all .8s ease";
});

function revealOnScroll() {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    if (revealTop < windowHeight - 120) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ===============================
// Smooth Scroll (Backup)
// ===============================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ===============================
// Hero Button Animation
// ===============================

const heroButton = document.querySelector(".hero-button");

heroButton.addEventListener("mouseenter", () => {
  heroButton.style.transform = "translateY(-5px) scale(1.05)";
});

heroButton.addEventListener("mouseleave", () => {
  heroButton.style.transform = "translateY(0) scale(1)";
});

// ===============================
// Course Card Animation
// ===============================

document.querySelectorAll(".course-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-15px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0px)";
  });
});

// ===============================
// Phone Card Animation
// ===============================

document.querySelectorAll(".phone-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.03)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});
