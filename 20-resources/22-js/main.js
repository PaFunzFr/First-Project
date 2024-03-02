/* Scroll back to 0 when refreshing */
/*----------------------------------------------------------------*/

window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

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
        menuContainer.style.background = 'linear-gradient(to left, rgba(0, 0, 0, 0) 1%, rgba(0, 113, 138, 1) 100%)';
     
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
        menuContainer.style.background = 'linear-gradient(to left, rgba(0, 0, 0, 0) 1%, rgba(0, 113, 138, 1) 100%)';

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

/* Background Image Randomization */
/*----------------------------------------------------------------*/
const backgroundImagePool = [
    '/02-resources/23-images/website_main.png',
    '/02-resources/23-images/website_Meran.png',
    '/02-resources/23-images/website_hammer.png',
    '/02-resources/23-images/website_mittenwald.png',
    '/02-resources/23-images/website_oberstdorf2.png',
]

// nextIndex global deklarieren, damit immer verfügbar bei Austausch;
let nextIndex = null;

/* Randomizer (no equal!) */
function getRandomImage() {
    /* definiere random Index / Zahl (math.random), die aufgerundet wurde (Math.floor()) und mulitplizie mit Länge Array (*backgroundImagePool.length */ 
    let randomIndex = Math.floor (Math.random() * backgroundImagePool.length);

    /* wenn Index identisch zu nächstem ist */
    if (randomIndex === nextIndex) {
        /* vergebe nächsten Index durch erhöhen um 1 - der Modulo (% backgroundImagePool.length) verhindert,
        dass Zahl außerhalb Array ist / setzt ihn zurück */
        randomIndex = (randomIndex + 1) % backgroundImagePool.length;
    } 
        nextIndex = randomIndex;
        return backgroundImagePool[randomIndex];
};


/* Transition between BackgroundImage Switch */
/*----------------------------------------------------------------*/
const currentBackgroundImage = document.getElementById('mainImageRandom');
const nextBackgroundImage = document.createElement('img');
nextBackgroundImage.style.opacity = 0;
currentBackgroundImage.after(nextBackgroundImage);

// update image and fade in (opacity) with delay (setTimeout)
function updateRandomImage() {

    const randomImageUrl = getRandomImage();
    nextBackgroundImage.src = randomImageUrl;
    /* Setze die Opazität des nächsten Bildes auf 0, um es unsichtbar zu machen */
    nextBackgroundImage.style.opacity = 1;
    nextBackgroundImage.style.height = '100%';

    /* Nach einer kurzen Verzögerung setze die Opazität des nächsten Bildes auf 1,
    um einen sanften Übergang zu erzeugen */

        setTimeout(() => {
            currentBackgroundImage.style.opacity = 0;
            currentBackgroundImage.style.height = '100%';

            // Nach einer weiteren kurzen Verzögerung aktualisiere das aktuelle Bild
            setTimeout(() => {
                currentBackgroundImage.src = randomImageUrl;
                currentBackgroundImage.style.opacity = 1;
                currentBackgroundImage.style.height = '100%';

            }, 2000); // Zeit für die Übergangsanimation
        }, 7000); // Verzögerung vor dem Einblenden des nächsten Bildes
}

updateRandomImage();
setInterval(updateRandomImage, 14000); // Switch every x miliseconds


/* Old shit */
/*----------------------------------------------------------------*/
/* defined via @media only screen for .welcome img 

document.addEventListener('DOMContentLoaded', function() {
    function scaleImage (toggleScreenWidth) {
        const getMainLogo = document.getElementById('mainLogoHome')

        if (toggleScreenWidth <= 400) {
            getMainLogo.style.width = '100px';
            getMainLogo.style.height = '100px';
        } else if (toggleScreenWidth <= 700) {
            getMainLogo.style.width = '150px';
            getMainLogo.style.height = '150px';
        } else if (toggleScreenWidth <= 1024) {
            getMainLogo.style.width = '200px';
            getMainLogo.style.height = '200px';
        } else {
            getMainLogo.style.width = '250px';
            getMainLogo.style.height = '250px';
        }
    }

    function updateImageSize() {
        const screenWidth = window.innerWidth;
        scaleImage(screenWidth);
    }

    // call / start function
    updateImageSize();

    // update Window-Width
    window.addEventListener('resize', updateImageSize);

}); */