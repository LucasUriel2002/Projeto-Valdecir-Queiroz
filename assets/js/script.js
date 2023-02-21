

// navBar config
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

 


// theme Button config

const bodyElement = document.body;
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if(currentTheme){
    bodyElement.classList.add('dark-theme');
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-theme');
    if(bodyElement.classList.contains('dark-theme')){
        localStorage.setItem('currentTheme', 'themeActive');
    }else{
        localStorage.removeItem('currentTheme');
    }
});