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
        date: 'März 2024',
        text: 'Es ist soweit. Die Arbeiten an der Website haben nach der Konzeptphase begonnen. Es wird ein Tourblog, der primär für Familie & Freunde gedacht ist.'
    },
    {
        date: 'Februar 2024',
        text: 'Das vorest letzte Video aus 2023 ist fertiggestellt. Nun beginnt die Konzept- und Designphase der Website.'
    },
    {
        date: 'Januar 2024',
        text: 'Beim Schneiden und Kreieren der Urlaubsvideos vom letzten Jahr kam die Idee, diese zusammen mit Bildern in meinem Website-Projekt zu implementieren.'
    },
    {
        date: 'Dezember 2023',
        text: 'Das Vorhaben, eine eigene Website zu erstellen, ist entstanden. Nun beginnt das Sammeln von Ideen über den Inhalt der Seite.'
    }
];

function createNewsList() {

    const newsContainer = document.querySelector('.newsList');
    const uListNews = document.createElement('ul');

    const newsList = singleNews.map(listEntry => {

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
        tourId: 'winterstein-23',
        tourMainPic: '02-resources/23-images/tours/23/wntst/main.jpg',
        tourSlidePics: [
            '02-resources/23-images/tours/23/wntst/1.jpg',
            '02-resources/23-images/tours/23/wntst/2.jpg',
            '02-resources/23-images/tours/23/wntst/3.jpg',
            '02-resources/23-images/tours/23/wntst/4.jpg',
            '02-resources/23-images/tours/23/wntst/5.jpg',
            '02-resources/23-images/tours/23/wntst/6.jpg',
            '02-resources/23-images/tours/23/wntst/7.jpg',
        ],
        tourTitle: 'Winterstein Herbst 2023',
        tourText: 'Ein kleiner Spaziergang im goldenen Herbst entlang des Wildkatzenpfads am Winterstein bei Bad Nauheim. Hauptanlass war das Testen des neuen Equipments für Foto und Film für die nächsten Touren.',
        tourVideo: '<iframe src="https://player.vimeo.com/video/927065990?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>'
    },
    {
        tourId: 'suedtirol-23',
        tourMainPic: '02-resources/23-images/tours/23/sdtrl/main.jpg',
        tourSlidePics: [
            '02-resources/23-images/tours/23/sdtrl/1.jpg',
            '02-resources/23-images/tours/23/sdtrl/2.jpg',
            '02-resources/23-images/tours/23/sdtrl/3.jpg',
            '02-resources/23-images/tours/23/sdtrl/4.jpg',
            '02-resources/23-images/tours/23/sdtrl/5.jpg',
            '02-resources/23-images/tours/23/sdtrl/6.jpg',
            '02-resources/23-images/tours/23/sdtrl/7.jpg',
            '02-resources/23-images/tours/23/sdtrl/8.jpg',
            '02-resources/23-images/tours/23/sdtrl/9.jpg',
            '02-resources/23-images/tours/23/sdtrl/10.jpg',
            '02-resources/23-images/tours/23/sdtrl/11.jpg',
            '02-resources/23-images/tours/23/sdtrl/12.jpg',
        ],
        tourTitle: 'Südtirol Herbst 2023',
        tourText: 'Der Jahresurlaub in Südtirol war geprägt von fast schon unverschämt gutem Wetter. Die erste Woche verbrachten wir in Meran. Neben dem obligatorischem Wandern auf einigen Waalwegen sowie Besuch von Schloss Tirol bestiegen wir auch die Mutspitze und wurden mit einem phänomenalem Ausblick belohnt. Die zweite Woche vebrachten wir weniger touristisch im idyllischen Laas und starteten von dort einige Wanderungen.',
        tourVideo: '<iframe src="https://player.vimeo.com/video/928711344?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>'
    },
    {
        tourId: 'oberstdorf2-23',
        tourMainPic: '02-resources/23-images/tours/23/obstd2/main.jpg',
        tourSlidePics: [
            '02-resources/23-images/tours/23/obstd2/1.jpg',
            '02-resources/23-images/tours/23/obstd2/2.jpg',
            '02-resources/23-images/tours/23/obstd2/3.jpg',
            '02-resources/23-images/tours/23/obstd2/4.jpg',
            '02-resources/23-images/tours/23/obstd2/5.jpg',
            '02-resources/23-images/tours/23/obstd2/6.jpg',
            '02-resources/23-images/tours/23/obstd2/7.jpg',
            '02-resources/23-images/tours/23/obstd2/8.jpg',
            '02-resources/23-images/tours/23/obstd2/9.jpg',
        ],
        tourTitle: 'Oberstdorf Spätsommer 2023',
        tourText: 'Kurzer Ausflug nach Oberstdorf. Ein verlängertes Wochenende mit einer Bergtour zur Kanzelwand und Fellhorn. Zwei Radtouren zur Biberalpe sowie durch das Rohrmoos rundeten das Ganze ab.',
        tourVideo: '<iframe src="https://player.vimeo.com/video/927052150?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>'
    },
    {
        tourId: 'mittenwald-23',
        tourMainPic: '02-resources/23-images/tours/23/mtwld/main.jpg',
        tourSlidePics: [
            '02-resources/23-images/tours/23/mtwld/1.jpg',
            '02-resources/23-images/tours/23/mtwld/2.jpg',
            '02-resources/23-images/tours/23/mtwld/3.jpg',
            '02-resources/23-images/tours/23/mtwld/4.jpg',
            '02-resources/23-images/tours/23/mtwld/5.jpg',
            '02-resources/23-images/tours/23/mtwld/6.jpg',
            '02-resources/23-images/tours/23/mtwld/7.jpg',
            '02-resources/23-images/tours/23/mtwld/8.jpg',
            '02-resources/23-images/tours/23/mtwld/9.jpg',
        ],
        tourTitle: 'Mittenwald Sommer 2023',
        tourText: 'Eine Woche rund um Mittenwald. Einige Tage verbrachten wir am Walchen- und Kochelsee inklusive Thermenbesuch. Es folgte eine Radtour zum Karwendelhaus und eine Wanderung zur Hochlandhütte. An einem Regentag besuchten wir Garmisch-Partenkirchen.',
        tourVideo: '<iframe src="https://player.vimeo.com/video/928709228?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>'
    },
    {
        tourId: 'arnsburg-23',
        tourMainPic: '02-resources/23-images/tours/23/klstarn/main.jpg',
        tourSlidePics: [
            '02-resources/23-images/tours/23/klstarn/1.jpg',
            '02-resources/23-images/tours/23/klstarn/2.jpg',
            '02-resources/23-images/tours/23/klstarn/3.jpg',
            '02-resources/23-images/tours/23/klstarn/4.jpg',
            '02-resources/23-images/tours/23/klstarn/5.jpg',
            '02-resources/23-images/tours/23/klstarn/6.jpg',
            '02-resources/23-images/tours/23/klstarn/7.jpg',
            '02-resources/23-images/tours/23/klstarn/8.jpg',
            '02-resources/23-images/tours/23/klstarn/9.jpg',
            '02-resources/23-images/tours/23/klstarn/10.jpg',
            '02-resources/23-images/tours/23/klstarn/11.jpg',
        ],
        tourTitle: 'Rund ums Kloster Arnsburg',
        tourText: 'Ein Tagesausflug rund um das Kloster Arnsburg bei Lich. Highlight war das Kloster selbst und das Megalithgrab zwischen Münzenberg und Muschenheim. Der Ausklang des Tages fand im Landhaus Klosterwald statt.',
        tourVideo: '<iframe src="https://player.vimeo.com/video/928713044?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>'
    },
    {
        tourId: 'oberstdorf1-23',
        tourMainPic: '02-resources/23-images/tours/23/obstd1/main.jpg',
        tourSlidePics: [
            '02-resources/23-images/tours/23/obstd1/1.jpg',
            '02-resources/23-images/tours/23/obstd1/2.jpg',
            '02-resources/23-images/tours/23/obstd1/3.jpg',
            '02-resources/23-images/tours/23/obstd1/4.jpg',
            '02-resources/23-images/tours/23/obstd1/5.jpg',
            '02-resources/23-images/tours/23/obstd1/6.jpg',
            '02-resources/23-images/tours/23/obstd1/7.jpg',
            '02-resources/23-images/tours/23/obstd1/8.jpg',
        ],
        tourTitle: 'Oberstdorf Sommer 2023',
        tourText: 'Der erste Ausflug für dieses Jahr: Die Camping Prämiere für unser neues Wohnmobil. Es geht zu Fuß rauf aufs Rubihorn. Mit dem Rad ging es im Anschluss hoch zur Gutenalpe. Den Abschluss bildete der Besuch in der Breitachklamm.',
        tourVideo: '<iframe src="https://player.vimeo.com/video/927066427?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>'
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
    //imagescaling
    popupImage.style.maxHeight = '80vh';
    popupImage.style.minHeight = '80vh';
    popupImage.style.width = '80vw';
    popupImage.style.objectFit= 'cover';
    //position
    popupImage.style.position = 'fixed';
    popupImage.style.top = '50%';
    popupImage.style.left = '50%';
    popupImage.style.transform = 'translate(-50%, -50%)';
    popupImage.style.zIndex = '99';
    //layout
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


// Tourslide Buttons

document.addEventListener('DOMContentLoaded', function() {
    const scrollRightButton = document.querySelector('.forward');
    const scrollLeftButton = document.querySelector('.backward');
    const tourContainer = document.querySelector('.tourContainer');

    scrollRightButton.addEventListener('click', function() {
        tourContainer.scrollLeft += window.innerWidth;
    });

    scrollLeftButton.addEventListener('click', function() {
        tourContainer.scrollLeft -= window.innerWidth;
    });
});