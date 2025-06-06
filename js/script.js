let btn = document.querySelector('.burger-menu');
let nav = document.querySelector('.nav__list');

btn.addEventListener('click', () => {
    nav.classList.add('active')
})

document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('active')
    }
})