// FRONT-END JS

// NAVBAR
// scroll padding enregistrement valeur css
const navbar = document.querySelector(".navbar");
const navHeight = navbar.offsetHeight;
document.documentElement.style.setProperty(
    "--scroll-padding-top",
    navHeight - 1 + "px"
);

// navbar sticky
window.addEventListener("scroll", function () {
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

// menu-mobile
const btnMobMenuOn = document.querySelector(".btn-menu-on");
const btnMobMenuOff = document.querySelector(".btn-menu-off");
const navlinks = document.querySelector(".navlinks");

btnMobMenuOn.addEventListener("click", function () {
    navlinks.classList.add("menu-mobile");
});
btnMobMenuOff.addEventListener("click", function () {
    navlinks.classList.remove("menu-mobile");
});
window.addEventListener("scroll", function () {
    navlinks.classList.remove("menu-mobile");
});

// dropdown appear on mobile
const dropdown = document.querySelector(".dropdown");
const menuRestoBtn = document.querySelector(".menu-resto");

var toggle = false;
menuRestoBtn.addEventListener("click", function () {
    if (toggle) {
        dropdown.classList.remove("dropdown-appear");
    } else {
        dropdown.classList.add("dropdown-appear");
    }
    toggle = !toggle;
});
btnMobMenuOff.addEventListener("click", function () {
    dropdown.classList.remove("dropdown-appear");
});
window.addEventListener("scroll", function () {
    dropdown.classList.remove("dropdown-appear");
});
// animate on scroll
const observer = new IntersectionObserver((entrees) => {
    entrees.forEach((entrer) => {
        if (entrer.isIntersecting) {
            entrer.target.classList.add("show");
        } else {
            entrer.target.classList.remove("show");
        }
    });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {
    observer.observe(el);
});
