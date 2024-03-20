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

/* TOGGLE MENU */
/*----------------------------------------------------------------*/
let isMenuOpen = false;
let menuContainer = document.querySelector('.menuContainer');
let menuButton = document.querySelector('.buttonMenuContainer');

function toggleMenu() {

    if (!isMenuOpen) {
        // Open Menu
        menuContainer.style.left = 0;
        isMenuOpen = true;

    } else {
        // Close Menu
        menuContainer.style.left = '-100%';
        isMenuOpen = false;
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


/* GENERATE NEWSLIST */
/*----------------------------------------------------------------*/
const singleNews = [
    {
        date: 'Januar 2024',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo id odio consequuntur sequi accusamus, distinctio iusto ea! Volga, obcaecati sit.'
    },
    {
        date: 'Januar 2024',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo id odio consequuntur sequi accusamus, distinctio iusto ea! Volga, obcaecati sit.'
    }
];

function createNewsList() {

    const newsContainer = document.querySelector('.newsList');
    const uListNews = document.createElement('ul');

    const newsListe = singleNews.map(listEntry => {

        const li = document.createElement('li');
        li.classList.add('newsEntry');

        const listDate = document.createElement('p');
        listDate.classList.add('newsDate');
        listDate.textContent = listEntry.date;

        const text = document.createElement('p');
        text.classList.add('newsText');
        text.textContent = listEntry.text;

        li.appendChild(listDate);
        li.appendChild(text);
        uListNews.appendChild(li);
    });

    newsContainer.appendChild(uListNews);
}

createNewsList();


/* GENERATE TOUR LIST */
/*----------------------------------------------------------------*/
const singleTours = [
    {
        tourId: 'mittenwald-23',
        tourMainPic: '/02-resources/23-images/website_mittenwald.png',
        tourSlidePics: [
            '/02-resources/23-images/website_Meran.png',
            '/02-resources/23-images/website_Meran.png',
            '/02-resources/23-images/website_Meran.png',
            '/02-resources/23-images/website_Meran.png',
            '/02-resources/23-images/website_Meran.png',
            '/02-resources/23-images/website_Meran.png',
            '/02-resources/23-images/website_Meran.png',
        ],
        tourTitle: 'Mittenwald im Spätsommer 2023',
        tourText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo id odio consequuntur sequi accusamus, distinctio iusto ea! Volga, obcaecati sit.',
        tourVideo: '<iframe src="https://www.youtube.com/embed/DX8sO7tIMgY?si=x0oUty5TKu7AGB59" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
    {
        tourId: 'oberstdorf-23',
        tourMainPic: '/02-resources/23-images/website_mittenwald.png',
        tourSlidePics: [
            '/02-resources/23-images/website_Meran.png',
            '/02-resources/23-images/website_Meran.png',
            '/02-resources/23-images/website_Meran.png',
            '/02-resources/23-images/website_Meran.png',
            '/02-resources/23-images/website_Meran.png',
            '/02-resources/23-images/website_Meran.png',
            '/02-resources/23-images/website_Meran.png',
            '/02-resources/23-images/website_Meran.png',
            '/02-resources/23-images/website_Meran.png',
            '/02-resources/23-images/website_Meran.png',
            '/02-resources/23-images/website_Meran.png',
            '/02-resources/23-images/website_Meran.png',
            '/02-resources/23-images/website_Meran.png',
            '/02-resources/23-images/website_Meran.png',
        ],
        tourTitle: 'Oberstdorf im Sommer 2023',
        tourText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo id odio consequuntur sequi accusamus, distinctio iusto ea! Volga, obcaecati sit.',
        tourVideo: '<iframe src="https://www.youtube.com/embed/DX8sO7tIMgY?si=x0oUty5TKu7AGB59" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
];

function createTourSlides() {
    const tourContainer = document.querySelector('.tourContainer');

    singleTours.forEach(tour => {

        // <div class="tourSlide tourId">
        const tourSlide = document.createElement('div');
        tourSlide.classList.add('tourSlide', tour.tourId);

        // <div class="tourMainPicTop">
        const mainPicDiv = document.createElement('div');
        mainPicDiv.classList.add('tourMainPicTop');

        // get img & set img src
        const mainPic = document.createElement('img');
        mainPic.setAttribute('src', tour.tourMainPic);

        // place <img> into <div class="tourMainPicTop">
        mainPicDiv.appendChild(mainPic);

        // <div class="tourPictures">
        const tourPicturesDiv = document.createElement('div');
        tourPicturesDiv.classList.add('tourPictures');

        // create tourSlitePics
        tour.tourSlidePics.forEach(function(pic) {

            // create <img> for each tousSlidePic()
            const imgSingle = document.createElement('img');

            // <img class="tourPicSingle">
            imgSingle.classList.add('tourPicSingle');
            imgSingle.setAttribute('src', pic);

            // POP-UP on click
            imgSingle.addEventListener('click', function() {
                openPopup(pic);
            });

            // <div class="tourPictures">
            // <img class"tourPicSingle src="tourSlidePics()">
            tourPicturesDiv.appendChild(imgSingle);
        });

        // <div class="tourBottom">
        const tourBottomDiv = document.createElement('div');
        tourBottomDiv.classList.add('tourBottom');

        // <div class="tourInfo">
        const tourInfoDiv = document.createElement('div');
        tourInfoDiv.classList.add('tourInfo');

        // <p class="tourTitle">
        const tourTitleP = document.createElement('p');
        tourTitleP.classList.add('tourTitle');
            // get Text tourTitle
            tourTitleP.textContent = tour.tourTitle;

        // <br>
        const br = document.createElement('br');

        // <p class="tourText">
        const tourTextP = document.createElement('p');
        tourTextP.classList.add('tourText');
            // get Text tourText
            tourTextP.textContent = tour.tourText;

        // place content to <div class="tourInfo">
        tourInfoDiv.appendChild(tourTitleP);
        tourInfoDiv.appendChild(br);
        tourInfoDiv.appendChild(tourTextP);

        // <div class="tourVideo">
        const tourVideoDiv = document.createElement('div');
        tourVideoDiv.classList.add('tourVideo');
            // get <iframe> Video
            tourVideoDiv.innerHTML = tour.tourVideo;

        // place content to <div class="tourVideo">
        tourBottomDiv.appendChild(tourInfoDiv);
        tourBottomDiv.appendChild(tourVideoDiv);

        tourSlide.appendChild(mainPicDiv);
        tourSlide.appendChild(tourPicturesDiv);
        tourSlide.appendChild(tourBottomDiv);

        tourContainer.appendChild(tourSlide);
    });
}

function openPopup(imageSrc) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    
    const popupContent = document.createElement('div');
    popupContent.classList.add('popupContent');
    
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('closeButton');
    closeBtn.textContent = '×';
    closeBtn.addEventListener('click', function() {
        closePopup(popup);
    });

    const popupImage = document.createElement('img');
    popupImage.src = imageSrc;
    popupImage.style.maxHeight = '80vh';
    popupImage.style.maxWidth = '80vw';
    popupImage.style.position = 'fixed';
    popupImage.style.top = '50%';
    popupImage.style.left = '50%';
    popupImage.style.transform = 'translate(-50%, -50%)';
    popupImage.style.zIndex = '99';
    popupImage.style.borderRadius = '10px';
    popupImage.style.borderTop = '2pt solid rgba(240,173,91,0.4)';
    popupImage.style.borderLeft = '2pt solid rgba(240,173,91,0.4)';
    popupImage.style.borderBottom = '2pt solid rgba(255, 255, 255, 0.2)';
    popupImage.style.borderRight = '2pt solid rgba(255, 255, 255, 0.2)';

    popupContent.appendChild(popupImage);
    popupContent.appendChild(closeBtn);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);

        // fade In
        setTimeout(() => {
            popup.style.opacity = 1;
        }, 100);
    

    // close PopUp
    document.addEventListener('click', function(event) {
        if (event.target === popup) {
            closePopup(popup);
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closePopup(popup);
        }
    });
}

function closePopup(popup) {
    popup.style.opacity = 0; 
    setTimeout(() => {
        popup.remove(); 
    }, 500); 
}


createTourSlides();
