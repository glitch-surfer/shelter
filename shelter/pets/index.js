/* BURGER */
const burgerIcon = document.getElementById('burger-icon')
const burgerMenu = document.getElementById('burger-menu')
const overlay = document.querySelector('.overlay')

burgerIcon.addEventListener('click', openBurgerMenu)
overlay.addEventListener('click', openBurgerMenu)
burgerMenu.addEventListener('click', openBurgerMenu)

function openBurgerMenu(event) {
    if (!burgerIcon.classList.value.includes('is-active')) {
        burgerIcon.classList.add('is-active')
        burgerMenu.classList.add('is-active')
        overlay.classList.add('is-active')
        document.body.style.overflow = "hidden"
    }
    else if (!event.target.classList.contains('burger-menu')) {
        burgerIcon.classList.remove('is-active')
        burgerMenu.classList.remove('is-active')
        overlay.classList.remove('is-active')
        document.body.style.overflow = ""
    }
}