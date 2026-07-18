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
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(`
.hero-course,
.hero-text,
.hero-image,
.course-info .box,
.accordion-item,
.teacher,
footer
`);

revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(70px)";
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
// Hero Image Floating Animation
// ===============================

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

// ===============================
// Hero Button Hover
// ===============================

const heroButtons = document.querySelectorAll(".btn1, .btn2");

heroButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-5px) scale(1.05)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0) scale(1)";
  });
});

// ===============================
// Statistics Cards Hover
// ===============================

document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.style.transform = "translateY(-12px)";
  });

  box.addEventListener("mouseleave", () => {
    box.style.transform = "translateY(0)";
  });
});

// ===============================
// Accordion Animation
// ===============================

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
