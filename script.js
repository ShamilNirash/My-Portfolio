const nav_bar_icon = document.querySelector(".fa-solid");
const navbar_options = document.querySelector(".navbar-options");
const navbar = document.querySelector(".navbar");
const navbar_section = document.querySelectorAll(".navbar-section");
const nav_cv_in_mobile = document.querySelector(".nav-cv-in-mobile");
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".navbar-options .navbar-section");
const contactSubmitBtn = document.querySelector(".contact-section-submitBtn");
const username = document.getElementById("form-name");
const email = document.getElementById("form-email");
const userMessage = document.getElementById("form-message");
const barIcon = document.querySelector(".fa-bars");
const navbarOptionsFirstTab = document.querySelector(
  ".navbar-options-first-tab"
);
const navbarName = document.querySelector(".navbar-my-name");
const homeSection = document.querySelector(".home section");
const addBlurEffectSection = document.querySelectorAll(".addBlurEffectSection");
let isNavbarOpen = false;
/******************navbar name section toggle*************************************************************/
navbarName.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
/*********************************************************************************************************/
/******************navbar mobile view list icon toggle****************************************************/
nav_bar_icon.addEventListener("click", () => {
  isNavbarOpen = !isNavbarOpen;
  if (isNavbarOpen) {
    barIcon.classList.add("fa-rotate-90");
    navbar_options.style.display = "flex";
    navbar_options.style.backgroundColor = "#D4D4D4";
    navbar_options.style.right = "0";
    navbar_options.style.transition = "0.3s ease";
    navbar_section.forEach(function (section) {
      section.style.display = "block";
    });
    nav_cv_in_mobile.style.display = "flex";
    addBlurEffectSection.forEach((section) => {
      section.style.filter = "blur(15px)";
      section.style.transition = "0.3s ease";
      section.style.zIndex = "-1";
    });
  } else {
    navbar_options.style.transition = "0.3s ease";
    barIcon.classList.remove("fa-rotate-90");
    navbar_options.style.right = "-80rem";
    navbarOptionsFirstTab.style.transition = "0.3s ease";
    navbarOptionsFirstTab.style.right = "-80rem";

    navbar.style.height = " 15vh";
    setTimeout(() => {
      navbar_section.forEach(function (section) {
        section.style.display = "none";
      });
    }, 500);

    nav_cv_in_mobile.style.display = "none";
    addBlurEffectSection.forEach((section) => {
      section.style.filter = "blur(0px)";
      section.style.transition = "0.3s ease";
    });
  }
});
/*****************************************************************************************************/
/******************navbar mobile view list options toggle****************************************************/
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function (e) {
    e.preventDefault();
    if (window.innerWidth < 900) {
      barIcon.classList.remove("fa-rotate-90");
      navbar_options.style.transition = "0.3s ease";
      navbar_options.style.right = "-80rem";
      navbarOptionsFirstTab.style.transition = "0.3s ease";
      navbarOptionsFirstTab.style.right = "-80rem";
      addBlurEffectSection.forEach((section) => {
        section.style.filter = "blur(0px)";
        section.style.transition = "0.3s ease";
      });
      navbar.style.height = " 15vh";
      navbar_section.forEach(function (section) {
        section.style.display = "none";
      });
      nav_cv_in_mobile.style.display = "none";
    }
    let targetId = this.getAttribute("href");
    sections.forEach((section) => {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      this.classList.add("active");
      if (section.getAttribute("id") == targetId) {
        section.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  });
});
/******************************************************************************************************/
/************* Project mobile section carousel*********************************************************/
window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        links.classList.add("normal");
        document
          .querySelector(".navbar-options a[href*=" + id + "]")
          .classList.add("active");
        document
          .querySelector(".navbar-options a[href*=" + id + "]")
          .classList.remove("normal");
      });
    }
  });
};
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
/*****************************************************************************************************/
/***********************************************contact section message btn***************************/
contactSubmitBtn.addEventListener("click", () => {
  var msg =
    "name : " +
    username.value +
    ",  email : " +
    email.value +
    ",   message : " +
    userMessage.value;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "shamil5034@gmail.com",
    Password: "54FF94A33B9899CE371E17F2431BE56DFCC2",
    To: "shamilnirash@gmail.com",
    From: "shamil5034@gmail.com",
    Subject: "This is the subject",
    Body: msg,
  }).then((message) => {
    if (
      message == "OK" &&
      username.value != "" &&
      email.value != "" &&
      userMessage != ""
    ) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your message send successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      username.value = "";
      email.value = "";
      userMessage.value = "";
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
});
/*****************************************************************************************************/
jQuery(function ($) {
  $(".textillate-5").textillate({
    loop: true,
    minDisplayTime: 3000,
    initialDelay: 1000,
    in: {
      effect: "bounce",
    },
  });
});
