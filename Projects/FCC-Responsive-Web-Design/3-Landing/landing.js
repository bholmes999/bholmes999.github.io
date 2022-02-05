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
        navMenu.style.height = '100%'
        navMenuActive = true
    }
})

// navMenu.style.backgroundColor = 'red';