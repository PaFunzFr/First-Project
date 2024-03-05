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

    nextBackgroundImage.style.opacity = 1;
    nextBackgroundImage.style.height = '100%';


        setTimeout(() => {
            currentBackgroundImage.style.opacity = 0;
            currentBackgroundImage.style.height = '100%';

            // update Image after Delay
            setTimeout(() => {
                currentBackgroundImage.src = randomImageUrl;
                currentBackgroundImage.style.opacity = 1;
                currentBackgroundImage.style.height = '100%';

            }, 2000); // Transition Time
        }, 7000); // Delay before next Image
}

updateRandomImage();
setInterval(updateRandomImage, 10000); // Switch every x miliseconds

/* NewsList */
/*----------------------------------------------------------------*/

function buildNewsList(newsList) {
    const getNewsListContainer = document.querySelector('.newsList');
    getNewsListContainer.innerHTML = '';

    newsList.forEach(function (news) {
        const listItem = document.createElement('li');
        listItem.classList.add('newsEntry'); // give html class

        const listItemHeader = document.createElement('p');
        listItemHeader.textContent = news.newsDate;
        listItemHeader.classList.add('newsDate'); // give html class

        const listItemText = document.createElement('p');
        listItemText.textContent = news.newsText;
        listItemText.classList.add('newsText'); // give html class

        listItem.appendChild(listItemHeader);
        listItem.appendChild(listItemText);

        getNewsListContainer.appendChild(listItem);
    });
}

const newsList = [
    {newsDate: '02/2024', newsText:'Hallo ich schreibe einen tollen text, der in den Newsfeed geht'},
    {newsDate: '03/2024', newsText:'Hallo ich schreibe einen tollen text, der in den Newsfeed geht'},
    {newsDate: '03/2024', newsText:'Hallo ich schreibe einen tollen text, der in den Newsfeed geht'},
    {newsDate: '03/2024', newsText:'Hallo ich schreibe einen tollen text, der in den Newsfeed geht'},
    {newsDate: '04/2024', newsText:'Hallo ich schreibe einen tollen text, der in den Newsfeed geht'},
    {newsDate: '04/2024', newsText:'Hallo ich schreibe einen tollen text, der in den Newsfeed geht'}
];

buildNewsList(newsList);



/* Hide / Unhide Effects */
/*----------------------------------------------------------------*/

const checkVisibility = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const getHiddenElementsToRight = document.querySelectorAll('.hiddenToRight');
getHiddenElementsToRight.forEach((el) => checkVisibility.observe(el));

/* SCROLL EVENT HOME */
/*----------------------------------------------------------------*/
/*
window.addEventListener('scroll', () => {

    console.log(window.scrollY); // Ausgabe Position Y
    const currentScroll = window.scrollY;
    const content = document.querySelector('.start');
    const newsList = document.querySelector('.news');
    const mainLogoHome = document.querySelector('.welcome');



    window.addEventListener('scroll', () => {
        console.log(window.scrollY); // Ausgabe Position Y
        const currentScroll = window.scrollY;

        if (currentScroll <= 300) {
            console.log('kleiner 300');
            content.style.position = 'fixed';
            content.style.margin = '60px auto';
            content.style.opacity = 1;

            newsList.style.opacity = 1;

        } else { 
            content.style.position = 'fixed';
            content.style.margin = '60px auto';
            content.style.opacity = 0;
            newsList.style.opacity = 0;
        }
    });

});

*/
