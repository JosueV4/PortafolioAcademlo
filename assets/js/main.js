//* Function nav to close responsive menu

const home = document.querySelector(".home");

home.addEventListener("click", () => {
    nav__ul.classList.remove("nav__menu__visible");
})