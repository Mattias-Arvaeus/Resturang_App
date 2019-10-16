var menuItems = [];

class MenuItem {
    constructor (name, description, category, price, image) {
        this.name = name;
        this.desc = description;
        this.cat  = category;
        this.price= price;
        this.image = image;

        this.addToList();
    }
    addToList = function () {
        menuItems.push(this);
    }

    createCard(name, description, category, price, image);
}

var hamburgare = new MenuItem("Högrevsburgare", "150 gram högrevs burgare med inlagd gurka, tomater, sallad och lök i ett brioche bröd.", "hamburger", 129, undefined);

console.log(menuItems);
console.log("Success");