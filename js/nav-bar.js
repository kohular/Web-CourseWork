const hamburgerbutton = document.getElementsByClassName('hamburger-toggle')[0]
const navLinks = document.getElementsByClassName('webpages')[0]

hamburgerbutton.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active')
})