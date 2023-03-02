var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var products = {
    shoes: []
};
var Shoes = /** @class */ (function () {
    function Shoes(id, size, color, price) {
        this.id = id;
        this.size = size;
        this.color = color;
        this.price = price;
    }
    Object.defineProperty(Shoes.prototype, "finalPrice", {
        get: function () {
            return this._finalPrice;
        },
        set: function (n) {
            this._finalPrice = n;
            this._discount = this.price - n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shoes.prototype, "discount", {
        get: function () {
            return this._discount;
        },
        set: function (n) {
            this._discount = n;
            this.finalPrice = this.price - n;
        },
        enumerable: false,
        configurable: true
    });
    return Shoes;
}());
var Boots = /** @class */ (function (_super) {
    __extends(Boots, _super);
    function Boots() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Boots;
}(Shoes));
var Sneakers = /** @class */ (function (_super) {
    __extends(Sneakers, _super);
    function Sneakers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sneakers;
}(Shoes));
var Sandales = /** @class */ (function (_super) {
    __extends(Sandales, _super);
    function Sandales() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sandales;
}(Shoes));
function iterator(products) {
    for (var i = 0; i < products.length; i++) {
        if (products[i] != undefined)
            console.log(products[i]);
    }
    /*
    for(let prop in products)
    {
        for(let item of products[prop])
        {
            console.log(item)
        }
    }
    */
}
function onPrice(products, price1, price2) {
    var flag = false;
    for (var i = 0; i < products.length; i++) {
        if (products[i].price > price1 && products[i].price < price2) {
            console.log("номер товара: ", products[i].id);
            flag = true;
        }
    }
    if (!flag)
        console.log("такой товар отсутсвует");
}
function onSize(products, size) {
    var flag = false;
    for (var i = 0; i < products.length; i++) {
        if (products[i].size == size) {
            console.log("номер товара: ", products[i].id);
            flag = true;
        }
    }
    if (!flag)
        console.log("такой товар отсутсвует");
}
function onColor(products, color) {
    var flag = false;
    for (var i = 0; i < products.length; i++) {
        if (products[i].color == color) {
            console.log("номер товара: ", products[i].id);
            flag = true;
        }
    }
    if (!flag)
        console.log("такой товар отсутсвует");
}
function Add(shoes) {
    products.shoes.push(shoes);
}
Add(new Boots(1, 42, "black", 270));
Add(new Sneakers(2, 40, "white", 350));
Add(new Sandales(3, 37, "brown", 170));
Add(new Boots(4, 40, "black", 200));
Add(new Sneakers(5, 43, "blue", 220));
Add(new Sneakers(6, 41, "green", 160));
console.log("вывод всего списка");
iterator(products.shoes);
console.log("вывод по цене в заданном диапазоне");
onPrice(products.shoes, 150, 300);
console.log("вывод по размеру");
onSize(products.shoes, 42);
console.log("вывод по цвету");
onColor(products.shoes, "black");
products.shoes[0].discount = 30;
console.log("Конечная стоисомость пары обуви: ", products.shoes[0].finalPrice);
console.log("Скидка составила: ", products.shoes[0].discount);
