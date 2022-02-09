/* Burger button menu dropdown */

let burgerButton = document.getElementById('burger-btn')
let navMenu = document.getElementById('nav-menu')
let navMenuActive = false

burgerButton.addEventListener('click', function(){
    if(navMenuActive) {
        navMenu.style.visibility = 'hidden'
        navMenu.style.height = '0'
        navMenuActive = false
    } else {
        navMenu.style.visibility = 'visible'
        navMenu.style.height = '100vh'
        navMenuActive = true
    }
})

/* Modal form sign-up */

let header = document.getElementById('header')
let modalButtons = document.querySelectorAll('.action-btn')
let modalDiv = document.getElementById('signup-modal-container')
let modalActive = false


modalButtons.forEach(element => {
    element.addEventListener('click', function(){
        if(modalActive) {
            modalDiv.style.visibility = 'hidden'
            modalDiv.style.height = '0'
            header.style.visibility = 'visible'
            modalActive = false

        } else {
            modalDiv.style.visibility = 'visible'
            modalDiv.style.height = '100%'
            header.style.visibility = 'hidden'
            modalActive = true
        }
    })    
});

