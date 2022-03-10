const burger = document.getElementById('hamburger')
const nav = document.getElementById('nav_links')


function toggleMenu() {
nav.classList.toggle('nav_active')
burger.classList.toggle('crossed_line')
}

burger.addEventListener('click', toggleMenu)