document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu-button"); // Ensure this matches your button's class
    const nav = document.querySelector(".nav-menu");
    const entireContent = document.querySelector(".entire-content");

    menuButton.addEventListener("click", function() {
        nav.classList.toggle("open");
        entireContent.classList.toggle("open");
    });
});