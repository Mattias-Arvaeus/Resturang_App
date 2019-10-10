var parentElmt = document.getElementById('content');
var targetElmt = parentElmt.querySelector('#menuItems');
var cardList = [];

function createCard (name, description, category, price, imgUrl) {
    var category = category;
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
            var orderPrice = document.createElement('p');
            orderPrice.setAttribute('class', 'cardPrice');
            orderPrice.textContent = price + " kr";
            var orderBtn = document.createElement('button');
            orderBtn.setAttribute('class', 'cardBtn', 'id', 'orderBtn', 'onclick', '');
            orderBtn.textContent = 'Order';
        orderAside.appendChild(orderPrice);
        orderAside.appendChild(orderBtn);
    
    card.appendChild(imgSect);
    card.appendChild(descSect);
    card.appendChild(orderAside);

    cardList.push(card);
}
createCard('Högrevsburgare', '150 gram högrevs burgare med inlagd gurka, tomater, sallad och lök i ett brioche bröd.', 'hamburger', 139, undefined);

document.body.appendChild(cardList[0]);

console.log(cardList);