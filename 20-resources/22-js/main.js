let isMenuOpen = false;
let menuContainer = document.querySelector('.menuContainer');
let menuButton = document.querySelector('.buttonMenuContainer');
let singleButtonMenu = document.getElementById('buttonMenu');
let getBlur = document.querySelectorAll('.blurContent'); // Definition NodeList

function toggleMenu() {

    if (!isMenuOpen) {
        // Menu öffnen
        menuContainer.style.left = 0;
        menuContainer.style.opacity = 1;
        menuContainer.style.background = 'linear-gradient(to left, rgba(0, 0, 0, 0) 1%, rgba(0, 113, 138, 1) 100%)';
     
            getBlur.forEach(function(blur) {        //greife alle aus NodeList mit .getBlur
                blur.style.filter = 'blur(5px)';
                blur.style.transition = 'filter 0.9s ease'; // Blur Transition
            });

        isMenuOpen = true;
        singleButtonMenu.style.opacity = 0;
        console.log('Menu opened');
    } else {
        // Menu schließen
        menuContainer.style.left = '-100%';
        menuContainer.style.opacity = 0;
        menuContainer.style.background = 'linear-gradient(to left, rgba(0, 0, 0, 0) 1%, rgba(0, 113, 138, 1) 100%)';

            getBlur.forEach(function(blur){
                blur.style.filter = 'none';
                blur.style.transition = 'filter 0.9s ease';
            });

        isMenuOpen = false;
        singleButtonMenu.style.opacity = 1;
        console.log('Menu closed');  
    }
}

menuButton.addEventListener('click', toggleMenu);