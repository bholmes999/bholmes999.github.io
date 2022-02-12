const mediaQueryCSS = 620

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
        navMenu.style.height = '100%'
        navMenuActive = true
    }
    // alert('burger menu clicked')
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

/* Bug Fix:
        The #nav-menu element is hidden after you click the burger 
        menu on and off again.  Boolean navMenuActive is set to false. 
        Boolean navMenuActive should stay false upon resize, but the 
        #nav-menu element should be visible on resized larger screen.
        The reason I cannot change the values via CSS Media Query is 
        because javascript adds inline styling which overrides
*/

window.addEventListener('resize', function(event) {
    /*  
        Set inline CSS to visible for #nav-menu element when screen is 
        less than mediaQueryCSS
    */
    if (document.documentElement.clientWidth >= mediaQueryCSS) {
        navMenu.style.visibility = 'visible'
        navMenu.style.height = '100%'
        navMenuActive = true

    }

    /*
        Set boolean navMenuActive to false and make burger menu hidden 
        when screen size is less than mediaQueryCSS   
    */

    if (this.document.documentElement.clientWidth < mediaQueryCSS) {
        navMenu.style.visibility = 'hidden'
        navMenu.style.height = '0'
        navMenuActive = false
    }
}, true);
