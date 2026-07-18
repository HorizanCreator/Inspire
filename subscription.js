// ======================================
// Navbar Scroll Effect
// ======================================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ======================================
// Scroll Reveal Animation
// ======================================

const revealElements = document.querySelectorAll(`
.hero-course,
.box,
.step-card,
.notice,
.contact-card,
.accordion-item,
.last-section
`);

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

// ======================================
// Hero Image Floating Animation
// ======================================

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {
  heroImage.animate(
    [
      { transform: "translateY(0px)" },

      { transform: "translateY(-18px)" },

      { transform: "translateY(0px)" },
    ],

    {
      duration: 5000,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  );
}

// ======================================
// Button Hover Animation
// ======================================

const buttons = document.querySelectorAll(".btn1,.btn2,.whatsapp-btn");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-5px) scale(1.05)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0) scale(1)";
  });
});

// ======================================
// Cards Hover Animation
// ======================================

const cards = document.querySelectorAll(".box,.step-card,.contact-card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// ======================================
// Accordion
// ======================================

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    const opened = item.classList.contains("active");

    accordionItems.forEach((accordion) => {
      accordion.classList.remove("active");

      accordion.querySelector(".accordion-content").style.maxHeight = null;
    });

    if (!opened) {
      item.classList.add("active");

      const content = item.querySelector(".accordion-content");

      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// ======================================
// Smooth Scroll
// ======================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ======================================
// Contact Cards Animation Delay
// ======================================

document.querySelectorAll(".contact-card").forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.15}s`;
});

// ======================================
// Steps Animation Delay
// ======================================

document.querySelectorAll(".step-card").forEach((step, index) => {
  step.style.transitionDelay = `${index * 0.12}s`;
});

// ======================================
// Statistics Cards Animation Delay
// ======================================

document.querySelectorAll(".box").forEach((box, index) => {
  box.style.transitionDelay = `${index * 0.1}s`;
});

// ======================================
// Page Loaded Animation
// ======================================

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// ======================================
// Console Message
// ======================================

console.log("INSPIRE Courses Subscription Page Loaded Successfully 🚀");
