
// CardCreation Variables
var parentElmt = document.getElementById('content');
var targetElmt = parentElmt.querySelector('#menuItems');
var cardList = [];

// MenuItems variables
var menuItems = [];

function createCard (name, description, category, price, imgUrl) {
    // The Card
    var card = document.createElement('article');
    card.setAttribute('class', 'card');

    // Image presentation
        var imgSect = document.createElement('section');
        imgSect.setAttribute('class', 'cardImg')
            var img = document.createElement('img');
            img.setAttribute('src', imgUrl, 'alt', name);
        imgSect.appendChild(img);
    // Description
        var descSect = document.createElement('section');
        descSect.setAttribute('class', 'cardDesc');
            var heading = document.createElement('h4');
            heading.textContent = name;
            var desc = document.createElement('p');
            desc.textContent = description;
        descSect.appendChild(heading);
        descSect.appendChild(desc);
    // Order information
        var orderAside = document.createElement('aside');
        orderAside.setAttribute('class', 'cardAside')
            var cat = document.createElement('p');
            cat.setAttribute('class', 'cat');
            cat.textContent = category;
            var orderPrice = document.createElement('p');
            orderPrice.setAttribute('class', 'cardPrice');
            orderPrice.textContent = price + " kr";
            var orderBtn = document.createElement('button');
            orderBtn.setAttribute('class', 'cardBtn', 'id', 'orderBtn', 'onclick', '');
            orderBtn.textContent = 'Beställ';
        orderAside.appendChild(cat);
        orderAside.appendChild(orderPrice);
        orderAside.appendChild(orderBtn);

    card.appendChild(imgSect);
    card.appendChild(descSect);
    card.appendChild(orderAside);

    cardList.push(card);
    targetElmt.appendChild(card);
    
}

function getCategory (targetCard) {
    return targetCard.querySelector('.cardAside').querySelector('.cat').textContent;
}

function removeCards () {
    while (targetElmt.firstChild) {
        targetElmt.removeChild(targetElmt.firstChild);
    }
}

function searchCard (category) {
    removeCards();
    // function for displaying the correct card in a category
    // 1. init a for-loop who iterate the array CardList
    for (var i = 0; i < cardList.length; i++) {
        // 2. see if category matches the cardlist[i].cat
        if (getCategory(cardList[i]) === category) {
            // 3. append the card from Cardlist to the html document
            targetElmt.appendChild(cardList[i]);
        }
    }
}

// Menuitems
class MenuItem {
    addToList = function () {
        menuItems.push(this);
    }
    constructor (name, description, category, price, image) {
        this.name = name;
        this.desc = description;
        this.cat  = category;
        this.price= price;
        this.image = image;

        this.addToList();

        createCard(name, description, category, price, image);
    }
}

const vesuvio = new MenuItem('Vesuvio', 'Ost och skinka', 'pizza', 75, '../img/pizza.jpg');
const hawaii = new MenuItem('Hawaii', 'Ost, skinka och annanas', 'pizza', 75, '../img/pizza.jpg');
const calzone = new MenuItem('Calzone', 'Mozzarella och skinka (Inbakad)', 'pizza', 75 , '../img/pizza.jpg');
const havana = new MenuItem('Havana', 'Ost, skinka, annanas, banan och curry', 'pizza', 80, '../img/pizza.jpg');
const venezia = new MenuItem('Venezia', 'Ost, skinka, kyckling, räkor, paprika och vitlökssås', 'pizza', 85, '../img/pizza.jpg');
const apollo = new MenuItem('Apollo', 'Ost, skinka, annanas och räkor', 'pizza', 80 , '../img/pizza.jpg');
const casalinga = new MenuItem('Casalinga', 'Baby mozzarella, kyckling, bacon, aubergine, lök, soltorkade tomater, vitlök och basilika', 'pizza', 110 , '../img/pizza.jpg');

const halloumiburgare = new MenuItem('Halloumiburgare', 'Halloumi, avokado, körsbärtomat, ättiksgurka, vitlöksmajonäs', 'hamburgare', 140, '../img/hamburgare.jpg');
const torentoDelux = new MenuItem('Torento Delux', '150g högrevsburgare, bearnaisesås, räkor, parmaskinka, cheddarost', 'hamburgare', 140, '../img/hamburgare.jpg');
const chevre = new MenuItem('Chèvre', '150g högrevsburgare, Chèvrekräm , peppar salami, rostade valnötter & karamilliserad lök', 'hamburgare', 140, '../img/hamburgare.jpg');
const classic = new MenuItem('Classic', '150g högrevsburgare, hamburgardressing, tomat, picklad lök, cheddarost', 'hamburgare', 140, '../img/hamburgare.jpg');
const dubbelCheese = new MenuItem('Dubbel Cheese', '150g högrevsburgare, hamburgardressing, rödlök, tomat, dubbel cheddarost', 'hamburgare', 140, '../img/hamburgare.jpg');
const texasPork = new MenuItem('Texas pork', '150 g pulled pork, rödlök, cheddarost, saltgurka & chipotle mayo', 'hamburgare', 140, '../img/hamburgare.jpg');
const bigHot = new MenuItem('Big Hot', '150g högrevsburgare, pepperonikorv, chipotle mayo, jalapenos, pickladlök, cheddarost', 'hamburgare', 140, '../img/hamburgare.jpg');
const devote = new MenuItem('Devote', '150g högrevsburgare, tryffelmajonnäs, ruccola, stekta champinjoner, karamelliserad lök, cheddarost', 'hamburgare', 140, '../img/hamburgare.jpg');
const royal = new MenuItem('Royal', '150g högrevsburgare, dijon mayo, karamelliserad lök, stekt bacon, cheddarost', 'hamburgare', 140, '../img/hamburgare.jpg');
const baconBlue = new MenuItem('Bacon Blue', '150g högrevsburgare, blue cheese dressing, stekt bacon, lök, tomat, cheddarost', 'hamburgare', 140, '../img/hamburgare.jpg');
const gourmet = new MenuItem('Gourmét', '150g högrevsburgare, pestomayo, picklad lök, mozzarellaost, soltorkade tomater', 'hamburgare', 140, '../img/hamburgare.jpg');
const oumphBurgare = new MenuItem('Oumph Burgare', '150g pulled oumph, picklad lök, veg-dressing, avokado, tomat, sidesallad eller strips', 'hamburgare', 140, '../img/hamburgare.jpg');

const sallad = new MenuItem('BBQ Sallad', 'Grillad oxfilé, ädelost, pumpakärnor, vinägrett, grön sparris, paprika, rödlök, baby mozzarella', 'sallad', 145, '../img/sallad.jpg');

const oxfile = new MenuItem('Oxfilé Planka', 'Smörstekta grönsaker, bacon, hemlagad potatismos, grön sparris, rödvinssås och bearnaisesås', 'carte', 269, '../img/carte.jpg');

const pasta = new MenuItem('Vegetarisk pasta', 'Grön sparris, halloumi, parmesan, paprika , lök, kalamataoliver', 'pasta', 110, '../img/pasta.jpg');

const barn = new MenuItem('Amerikask pannkaka', 'Med grädde & sylt eller en kula glass', 'barn', 65, '../img/barn.jpg');