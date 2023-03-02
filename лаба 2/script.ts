const products = {
    shoes: [] as Shoes[]
}

abstract class Shoes
{
    readonly id: number;
    readonly size: number;
    readonly color: string;
    price: number;
    private _discount: number;
    private _finalPrice: number;

    constructor(id: number, size: number, color: string, price: number)
    {
        this.id = id;
        this.size = size;
        this.color = color;
        this.price = price;
    }

    public get finalPrice(): number {
        return this._finalPrice;
    }
    public set finalPrice(n: number) {
       this._finalPrice = n;
       this._discount = this.price - n;
    }

    public get discount(): number {
        return this._discount;
    }
    public set discount(n: number) {
        this._discount = n;
        this.finalPrice = this.price - n;
    }
}

class Boots extends Shoes {}
class Sneakers extends Shoes {}
class Sandales extends Shoes {}

function iterator(products: any[]) : void 
{
    for (let i: number = 0; i < products.length; i++)
    {
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

function onPrice(products: any[], price1: number, price2: number) : void
{
    let flag = false;
    for (let i: number = 0; i < products.length; i++)
    {
        if (products[i].price > price1 && products[i].price < price2)
        {
            console.log("номер товара: ", products[i].id);
            flag = true;
        }
    }
    if (!flag)
        console.log("такой товар отсутсвует");
}

function onSize(products: any[], size: number) : void
{
    let flag = false;
    for (let i: number = 0; i < products.length; i++)
    {
        if (products[i].size == size)
        {
            console.log("номер товара: ", products[i].id);
            flag = true;
        }
    }
    if (!flag)
        console.log("такой товар отсутсвует");
}

function onColor(products: any[], color: string)
{
    let flag = false;
    for (let i: number = 0; i < products.length; i++)
    {
        if(products[i].color == color)
        {
            console.log("номер товара: ", products[i].id);
            flag = true;
        }
    }
    if (!flag)
        console.log("такой товар отсутсвует");
}

function Add(shoes: any) : void
{
    products.shoes.push(shoes);
}

Add(new Boots(1, 42, "black", 270));
Add(new Sneakers(2, 40, "white", 350));
Add(new Sandales(3, 37, "brown", 170));
Add(new Boots(4, 40, "black", 200));
Add(new Sneakers(5, 43, "blue", 220));
Add(new Sneakers(6, 41, "green", 160));

console.log("вывод всего списка")
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