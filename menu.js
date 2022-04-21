const btn = document.getElementById('check')
const menu = document.getElementById('menu')

function hamb(event) {
    if (event.type === 'touchstart') event.preventDefault
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

function menuHamb() {
    const li = document.getElementById('li');
    nav.classList.toggle('active')
}

btn.addEventListener('click', hamb)
btn.addEventListener('touchstart', hamb)
menu.addEventListener('click', menuHamb)