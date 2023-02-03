// FRONT-END JS

// NAVBAR
// scroll padding enregistrement valeur css
const navbar = document.querySelector(".navbar");
const navHeight = navbar.offsetHeight;
document.documentElement.style.setProperty(
    "--scroll-padding-top",
    navHeight - 1 + "px"
);

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
