const mobileNav = document.querySelector(".nav-menu")
const burger = document.querySelector(".hamburger")

burger.addEventListener("click", function() {
    mobileNav.classList.toggle('active')
    burger.classList.toggle('active')
})