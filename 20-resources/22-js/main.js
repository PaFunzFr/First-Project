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

const checkVisibility = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

            if (entry.isIntersecting && entry.target.classList.contains('hidden')) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    },

    {threshold: 0}
);

const getHiddenElementsToRight = document.querySelectorAll('.hidden');
getHiddenElementsToRight.forEach((el) => checkVisibility.observe(el));


/* SCROLL EVENT HOME */
/*----------------------------------------------------------------*/
const contentLogoBackground = document.querySelector('.mainLogoBackground');
const contentVideoLoop = document.querySelector('.videoLoop');
const scrollDownSymbol = document.querySelector('.scrollDownArrow');

let lastScroll = window.scrollY;

const windowHeight = window.innerHeight; 
const documentHeight = document.documentElement.scrollHeight; // document height
const maxScroll = documentHeight - windowHeight; // max scroll height


window.addEventListener('scroll', () => {
   
    const currentScroll = window.scrollY;
    const scrollDirection = currentScroll > lastScroll ? 'down' : 'up';

    let scrollPercentage = Math.round((currentScroll / maxScroll) * 100); // percentage of scrolling

    console.log(window.scrollY);
    console.log('Scroll percentage:', scrollPercentage);

if (scrollDirection === 'down') {

    if (scrollPercentage >= 3 && scrollPercentage <= 95) {
        // Content Start
        contentLogoBackground.style.opacity = '0';
        contentVideoLoop.style.opacity = '0.1';
        scrollDownSymbol.style.opacity = '1';

    } else if (scrollPercentage > 95 && scrollPercentage <=100) {
        // Content End
        contentLogoBackground.style.opacity = '0';
        contentVideoLoop.style.opacity = '0.1';
        scrollDownSymbol.style.opacity = '0';

    } else {
        // Content Else
        contentLogoBackground.style.opacity = '1';
        contentVideoLoop.style.opacity = '1';
        scrollDownSymbol.style.opacity = '1';
    }

} else {

    if (scrollPercentage >= 3 && scrollPercentage <= 95) {
        // Content Start
        contentLogoBackground.style.opacity = '0';
        contentVideoLoop.style.opacity = '0.1';
        scrollDownSymbol.style.opacity = '1';

    } else if (scrollPercentage > 95 && scrollPercentage <=100) {
        // Content End
        contentLogoBackground.style.opacity = '0';
        contentVideoLoop.style.opacity = '0.1';
        scrollDownSymbol.style.opacity = '0';

    } else {
        // Content Else
        contentLogoBackground.style.opacity = '1';
        contentVideoLoop.style.opacity = '1';
        scrollDownSymbol.style.opacity = '1';
    }
}

lastScroll = currentScroll;

});