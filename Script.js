const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
    // Toggle the "menu-active" class on the menu
    menu.classList.toggle('menu-active');
    
    // Toggle the "active" class on the burger icon
    burger.classList.toggle('active');
});
