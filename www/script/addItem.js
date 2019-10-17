
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
            orderBtn.textContent = 'Order';
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

const vesuvio = new MenuItem('Vesuvio', 'Skinka, ost och tomatsås', 'pizza', 98, '../img/pizza.jpg');
const hawaii = new MenuItem('Hawaii', 'Pizza med ost, skinka och annanas', 'pizza', 98, '../img/pizza.jpg');

