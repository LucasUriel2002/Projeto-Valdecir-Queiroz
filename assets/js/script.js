

// navBar config
const bar = document.getElementById('bar')
const nav = document.getElementById('nav')

const navbar = document.getElementById('navbar')
var sticky = navbar.offsetTop

window.onscroll = function() {myFunction()}


if (bar) {
    bar.addEventListener('click', () => {
        if (nav.classList.contains('active')){
            if (window.pageYOffset > sticky){
                nav.classList.remove('active')
                bar.classList.remove('openmenu')
            } else {
                nav.classList.remove('active')
                navbar.classList.remove('top')
                bar.classList.remove('openmenu')
                bar.classList.remove("colormenu")
            }
        } else {
            nav.classList.add('active')
            navbar.classList.add("top")
            bar.classList.add('openmenu')
        }
        
    })
}

function myFunction() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("top")
      bar.classList.add("colormenu")
    } else {
        if (nav.classList.contains('active') === false){
            navbar.classList.remove("top")
            bar.classList.remove("colormenu")
        }
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



//partners Slider slick config

$('.partners .container').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 400,
    slidesToShow: 8,
    slidesToScroll: 2,
    responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                speed: 600,
                autoplay: true,
                autoplaySpeed: 4000,
                infinite: true,
                dots: true,
                arrows: false
            }
            },
            {
            breakpoint: 780,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                speed: 600,
                autoplay: true,
                autoplaySpeed: 4000,
                infinite: true,
                dots: true,
                arrows: false
              
            }
            },
            {
            breakpoint: 530,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 600,
                autoplay: true,
                autoplaySpeed: 400,
                infinite: true,
                dots: false,
                arrows: false,
                centerMode: true
                
                
            }
            }]
    });


//Card Slider slick config


$('.icon-phrases .container').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 2,
    centerMode: true,
    focusOnSelect: true,
    
    responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 300,
                autoplay: true,
                autoplaySpeed: 4000,
                infinite: true,
                dots: true,
                centerMode: true,
                focusOnSelect: true
            }
            },
            {
            breakpoint: 780,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                speed: 300,
                autoplay: true,
                autoplaySpeed: 4000,
                infinite: true,
                dots: true,
                centerMode: false,
                focusOnSelect: false
            }
            },
            {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                autoplay: true,
                autoplaySpeed: 4000,
                infinite: true,
                dots: true,
                centerMode: false,
                focusOnSelect: false
            }
            }]        
    });
