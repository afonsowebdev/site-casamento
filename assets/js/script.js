/* Toggle */
const toggle = document.querySelector('.nav_toggle');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.nav_menu');
const navLinks = document.querySelectorAll('.nav_link')

toggle.addEventListener('click', () => {
    nav.classList.toggle('nav_visible');
    toggle.classList.toggle('active');
});