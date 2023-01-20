class Button {
    #width;
    #height;
    #text;
    get width() {
        return this.#width;
    }
    set width(value) { //Пример объявления set-метода
        if (typeof value == "number" && value > 0)
            this.#width = value;
    }
    get height() {
        return this.#height;
    }
    set height(value) {
        if (typeof value == "number" && value > 0)
            this.#height = value;
    }
    get text() {
        return this.#text;
    }
    set text(value) {
        this.#text = text;
    }
    constructor(width, height, text) {
        this.#height = height;
        this.#width = width;
        this.#text = text;
    }
    showBtn() {
        document.write(`<button style="height: ${this.#height}px; width: ${this.#width}px;">${this.#text}</button>`);
    }
}

let btn1 = new Button(150, 50, "Button");

class BootstrapButton extends Button { //Пример наследования классов
    #color;
    get color() {
        return this.#color;
    }
    set color(value) {
        this.#color = value;
    }
    constructor(width, height, text, color){
        super(width, height, text); //Пример вызова конструктора базового класса при наследовании с использованием super 
        this.#color = color;
    }
    showBtn() { //Пример переопределения метода базового класса
        document.write(`<button style="color: ${this.#color}; height: ${this.height}px; width: ${this.width}px;">${this.text}</button>`);
    }
}

let btn2 = new BootstrapButton(150, 50, "Button", "Red");

class Figure { //Пример создания абстрактного класса в JS
    showInfo() {

    }
    getP() {

    }
    getArea() {

    }
    constructor(name) {
        if(this.constructor.name === "Figure") {
            throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
        }
        this.name = name;
    }
}

class Square extends Figure {
    constructor(name, side) {
        super(name);
        this.side = side;
    }
    showInfo() {
        return `The side of the ${this.name} square is ${this.side}`;
    }
    getP() {
        return this.side * 4;
    }
    getArea() {
        return this.side ** 2;
    }
}

let square = new Square("Kvadratik", 50);

//Task 1.1
btn1.showBtn();
document.write("<div style='margin: 10px'></div>");
//Task 1.2
btn2.showBtn();

//Task 2
console.log(square.showInfo());
console.log(square.getP());
console.log(square.getArea());

