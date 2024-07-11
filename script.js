function toggleMenu() {
    const menu = document.querySelector(".hamburger-menu").classList.toggle("active");
    const icon = document.querySelector(".menu-links").classList.toggle("active");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}