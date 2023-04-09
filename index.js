const btnNavEl = document.querySelector('.btn-mobile-menu');

const headerNav = document.querySelector('.menu-nav')

btnNavEl.addEventListener('click', () => {
    headerNav.classList.toggle('nav-activo')
})