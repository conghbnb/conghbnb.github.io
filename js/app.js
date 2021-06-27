document.querySelectorAll('.dropdown a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

document.querySelectorAll('.mega-dropdown a').forEach(e => {
    e.addEventListener('click', (event) => event.preventDefault())
})

let mainHeader = document.querySelector('.main-header')
let mobileMenu = document.querySelector('.mobile-menu')
let main = document.querySelector('.main')
let mb_menu_close = document.querySelector('#mb-menu-close')
document.querySelector('#mb-menu-open').addEventListener('click', (e) => {
    mainHeader.classList.add('show')
    document.querySelector('.top-header').style.display = "none"
    mobileMenu.style.display = "none"
    main.style.display = "none"
    mb_menu_close.style.display = "block"
}
)

mb_menu_close.addEventListener('click', () => {
    mainHeader.classList.remove('show')
    mobileMenu.style.display = "flex"
    main.style.display = "block"
    mb_menu_close.style.display = "none"
})