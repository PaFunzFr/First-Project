/* Scroll back to 0 when refreshing */
/*----------------------------------------------------------------*/
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

window.addEventListener('load', function() {
    var fadeIn = document.querySelectorAll('.fadeIn');
    fadeIn.forEach(function (fadeIn) {
        fadeIn.classList.add('loaded');
    });
});

/* HOVER ICONS
/*----------------------------------------------------------------*/
function changeImage(imgId,newSrc) {
    document.getElementById(imgId).src = newSrc;
    document.getElementById(imgId).src = newSrc;
    document.getElementById(imgId).src = newSrc;
};


/* toggle Menu via MenuButton */
/*----------------------------------------------------------------*/
let isMenuOpen = false;
let menuContainer = document.querySelector('.menuContainer');
let menuButton = document.querySelector('.buttonMenuContainer');
let singleButtonMenu = document.getElementById('buttonMenu');
let getBlur = document.querySelectorAll('.affectedByBlurToggle'); // Definition NodeList

function toggleMenu() {

    if (!isMenuOpen) {
        // Open Menu
        menuContainer.style.left = 0;
        menuContainer.style.opacity = 1;
        menuContainer.style.background = 'linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 113, 138, 1) 100%)';
     
            getBlur.forEach(function(x) {        //get all from NodeList .getBlur
                x.style.filter = 'blur(5px) saturate(0)'; //blur & saturation
                x.style.transition = 'filter 0.9s ease'; // Blur Transition
            });
            
        isMenuOpen = true;
        singleButtonMenu.style.opacity = 0;
        //console.log('Menu opened');
    } else {
        // Close Menu
        menuContainer.style.left = '-100%';
        menuContainer.style.opacity = 0;
        menuContainer.style.background = 'linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 113, 138, 1) 100%)';

            getBlur.forEach(function(x){
                x.style.filter = 'none';
                x.style.transition = 'filter 0.9s ease';
            });

        isMenuOpen = false;
        singleButtonMenu.style.opacity = 1;
        //console.log('Menu closed');  
    }
}

menuButton.addEventListener('click', toggleMenu);

/* Hide / Unhide Effects */
/*----------------------------------------------------------------*/
const contentLogoBackground = document.querySelector('.mainLogoBackground');
const contentVideoLoop = document.querySelector('.videoLoop');
const scrollDownSymbol = document.querySelector('.scrollDownArrow');

let previousEntry = null;

const checkVisibility = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (previousEntry !== null && previousEntry.target.classList.contains('show')) {
                previousEntry.target.classList.remove('show'); // Klasse 'show' vom vorherigen Eintrag entfernen
            }

                if (entry.isIntersecting && entry.target.classList.contains('homePlaceholder')) {
                    entry.target.classList.add('show');
                    contentLogoBackground.style.opacity = '1';
                    contentVideoLoop.style.opacity = '1';
                    scrollDownSymbol.style.opacity = '1';
                    console.log('Home');

                } else if (entry.isIntersecting && !entry.target.classList.contains('homePlaceholder') && !entry.target.classList.contains('vegan')) {
                    entry.target.classList.add('show');
                    contentLogoBackground.style.opacity = '0';
                    contentVideoLoop.style.opacity = '0.1';
                    scrollDownSymbol.style.opacity = '1';        
                    console.log('BBB');
                    
                } else if (entry.isIntersecting && entry.target.classList.contains('vegan')) {
                    entry.target.classList.add('show');
                    contentLogoBackground.style.opacity = '0';
                    contentVideoLoop.style.opacity = '0.1';
                    scrollDownSymbol.style.opacity = '0';        
                    console.log('CCC');
                } 
            previousEntry = entry;
        }
    });
}, {threshold: 0.3});

const getElements = document.querySelectorAll('main section');
getElements.forEach((el) => checkVisibility.observe(el));



