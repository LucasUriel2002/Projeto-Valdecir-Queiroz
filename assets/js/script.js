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

  //scroler 

  "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"
  const swiper = new Swiper('.swiper', {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      
    
      breakpoints: {
          // when window width is >= 320px
          428: {
            slidesPerView: 3,
            spaceBetween: 20
          }
          // when window width is >= 640px 
      },
  
  
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
  
        
      },
    });