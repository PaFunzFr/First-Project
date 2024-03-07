/* Scroll back to 0 when refreshing */
/*----------------------------------------------------------------*/

window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

window.addEventListener('load', function() {
    var fadeIn = document.querySelectorAll('.fadeIn');
    fadeIn.forEach(function(fadeIn) {
        fadeIn.classList.add('loaded');
    });
});
/* SCROLL EVENT HOME */
/*----------------------------------------------------------------*/
let isScrollingDisabled = false;
let lastScroll = window.scrollY;

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}

window.addEventListener('scroll', () => {
    if (isScrollingDisabled) return; // Wenn das Scrollen bereits deaktiviert ist, wird die Funktion beendet

    const currentScroll = window.scrollY;
    const scrollDirection = currentScroll > lastScroll ? 'down' : 'up';


    const windowHeight = window.innerHeight; 
    const documentHeight = document.documentElement.scrollHeight; // document height
    console.log(window.scrollY);
    const maxScroll = documentHeight - windowHeight; // max scroll height

    let scrollPercentage = Math.round((currentScroll / maxScroll) * 100); // percentage of scrolling

    console.log('Scroll percentage:', scrollPercentage);

if (scrollDirection === 'down') {

    if (scrollPercentage >= 14 && scrollPercentage < 20) {
        console.log('NEWS erreicht');
        disableScrolling();
        isScrollingDisabled = true; 
        setTimeout(() => {
            enableScrolling();
            isScrollingDisabled = false;
            window.scrollTo(0,maxScroll * 0.27); 
        }, 1000 );
    } else if (scrollPercentage >= 28 && scrollPercentage < 34) {
        console.log('ABOUT erreicht');
        disableScrolling();
        isScrollingDisabled = true; 
        setTimeout(() => {
            enableScrolling();
            isScrollingDisabled = false;
            window.scrollTo(0,maxScroll * 0.41); 
        }, 1000 );
    } else {
        console.log('scrolling');
    }
} else {
    if (scrollPercentage >= 14 && scrollPercentage < 28) {
        console.log('NEWS erreicht');
        disableScrolling();
        isScrollingDisabled = true; 
        setTimeout(() => {
            enableScrolling();
            isScrollingDisabled = false;
            window.scrollTo(0,0); 
        }, 1000 );
    } else {
        console.log('scrolling');
    }

}
lastScroll = currentScroll;
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
            console.log(entry);
            if (entry.isIntersecting && entry.target.classList.contains('hidden')) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');

            }
        });
    }, {threshold: 0});

    const getHiddenElementsToRight = document.querySelectorAll('.hidden');
    getHiddenElementsToRight.forEach((el) => checkVisibility.observe(el));


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

        const listItemText = document.createElement('span');
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



