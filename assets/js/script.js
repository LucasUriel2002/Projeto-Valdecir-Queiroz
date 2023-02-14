const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('nav')

const navbar = document.getElementById('navbar')
var sticky = navbar.offsetTop

window.onscroll = function() {myFunction()}


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

function myFunction() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("top");
    } else {
      navbar.classList.remove("top");
    }
  }