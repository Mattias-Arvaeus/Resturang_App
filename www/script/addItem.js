var parentElmt = document.getElementById('content');
var targetElmt = parentElmt.querySelector('#menuItems');

function createCard (name, description, price, imgUrl) {
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
            heading.textContent(name);
            var desc = document.createElement('p');
            desc.textContent(description)
        descSect.appendChild(heading);
        descSect.appendChild(desc);
    // Order information
        var orderAside = document.createElement('aside');
        orderAside.setAttribute('class', 'cardAside')
            var price = document.createElement('p');
            price.setAttribute('class', 'cardPrice');
            price.textContent(price);
            var orderBtn = document.createElement('button');
            orderBtn.setAttribute('class', 'cardBtn', 'id', 'orderBtn', 'onclick', '');
            orderBtn.textContent('Order');
        orderAside.appendChild(price);
        orderAside.appendChild(orderBtn);
    
    card.appendChild(imgSect);
    card.appendChild(descSect);
    card.appendChild(orderAside);
}

console.log(targetElmt);