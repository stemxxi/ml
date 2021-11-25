const headerBg = document.querySelector('.nav__content-sub-bg');
const headerLink = document.querySelector('#header-link');
const nav = document.querySelector('#nav')
const close = document.querySelector('.close')


headerLink.addEventListener('click', () => {
    headerBg.classList.add('active')
})

close.addEventListener('click', () => {
    headerBg.classList.remove('active')
})
