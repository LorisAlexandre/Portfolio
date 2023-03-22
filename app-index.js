const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preloader.classList.add("fondu-out");
});

const navbar = document.querySelector("#navbar");
const navHeight = navbar.offsetHeight;
document.documentElement.style.setProperty(
    "--scroll-padding-top",
    `${navHeight} - 1px`
);

window.addEventListener("scroll", function () {
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

document.documentElement.style.setProperty(
    "--section-height",
    `calc(100vh - ${navHeight}px)`
);

// menu-mobile
const btnMobMenuOn = document.querySelector(".btn-menu-on");
const btnMobMenuOff = document.querySelector(".btn-menu-off");
const navlinks = document.querySelector(".nav-links");

btnMobMenuOn.addEventListener("click", function () {
    navlinks.classList.add("menu-mobile");
});
btnMobMenuOff.addEventListener("click", function () {
    navlinks.classList.remove("menu-mobile");
});
window.addEventListener("scroll", function () {
    navlinks.classList.remove("menu-mobile");
});
