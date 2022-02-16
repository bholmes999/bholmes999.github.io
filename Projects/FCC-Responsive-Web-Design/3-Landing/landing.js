const mediaQueryDesktop = window.matchMedia('(min-width: 620px)')
const mediaQueryMobile = window.matchMedia('(max-width: 619px)')

let mobileActive = true
let navMenuActive = false
let modalActive = false
let init = true

let burgerButton = document.getElementById('burger-btn')
let navMenu = document.getElementById('nav-menu')
let navLinks = document.querySelectorAll('.nav-link')
let mobileSignupDiv = document.getElementById('mobile-signup')
let desktopSignupDiv = document.getElementById('desktop-signup')
let mobileActionButton = document.getElementById('navbar-btn-mobile')
let desktopActionButton = document.getElementById('navbar-btn-desktop')

let header = document.getElementById('header')
let openModalButtons = document.querySelectorAll('.open')
let closeModalButtons = document.querySelectorAll('.close')
let modalDiv = document.getElementById('signup-modal-container')




function toggleBurgerMenu() {
   
    navMenu.classList.toggle('transition')
    navMenu.classList.toggle('hidden')
    navMenu.classList.toggle('full-height')
    navMenu.classList.toggle('flex-display')
       
    navMenuActive = !navMenuActive
}



function smallToLargeScreen(e) {
    if (e.matches) {      

        if (navMenuActive) {
            console.log('nav menu is active moving from small to large')
            toggleBurgerMenu()
        }

        navMenu.classList.remove('hidden')
        mobileActive = false
    }
  }
   
  // Register event listener
  mediaQueryDesktop.addListener(smallToLargeScreen)
  
  // Initial check
  smallToLargeScreen(mediaQueryDesktop)

function largeToSmallScreen(e) {

    if (e.matches) {
        navMenu.classList.toggle('hidden')
        mobileActive = true
    }
}

mediaQueryMobile.addListener(largeToSmallScreen)
largeToSmallScreen(mediaQueryMobile)


init = false


/* Burger button menu dropdown */

burgerButton.addEventListener('click', function(){   
    toggleBurgerMenu()
})

/* Make mobile nav-menu disappear when link is clicked */

navLinks.forEach(element => {
    element.addEventListener('click', function(){
        if (mobileActive) {
            toggleBurgerMenu()
        }
    })
})

/* Modal form sign-up */

openModalButtons.forEach(element => {
    element.addEventListener('click', function(){

        modalDiv.classList.remove('hidden')
            modalDiv.style.height = '100%'
            header.classList.add('hidden')
            modalActive = true

    })    
});

closeModalButtons.forEach(element => {
    element.addEventListener('click', function(){
        modalDiv.classList.add('hidden')
            header.classList.remove('hidden')
            // navMenu.removeAttribute('style')
            modalActive = false
    })
})