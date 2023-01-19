class PrintMachine { //Пример объявления класса
    #fontSize; //Пример объявления приватных полей класса
    #color;
    #fontFamily;
    constructor(fontSize, color, fontFamily) { //Пример переопределения конструктора класса
        this.#fontSize = fontSize;
        this.#color = color;
        this.#fontFamily = fontFamily;
    }
    print(text) {
        document.write(`<p style="font-size: ${this.#fontSize}; color: ${this.#color}; font-family: ${this.#fontFamily};">${text}</p>`);
    }
}

let print1 = new PrintMachine("medium", "rosybrown", "Segoe UI', Tahoma, Geneva, Verdana, sans-serif");
let print2 = new PrintMachine("larger", "salmon", "Segoe UI', Tahoma, Geneva, Verdana, sans-serif");
let print3 = new PrintMachine("x-large", "rebeccapurple", "Segoe UI', Tahoma, Geneva, Verdana, sans-serif");

class NewsArticle {
    #header;
    #text;
    #date;
    #tags;
    constructor(header, text, tags, year, month, day) {
        this.#header = header;
        this.#text = text;
        this.#tags = tags;
        this.#date = new Date(year, month + 1, day);
    }
    print() {
        document.write(`<h2>${this.#header}</h2>`);
        let date = new Date();
        let span = (date - this.#date) / 86400000;
        if (span < 1) { //Пример определения к-ва дней по временному промежутку
            document.write("<p><small>hodie<small></p>");
        }
        if (span < 7 && span > 1 ) {
            document.write(`<p><small>${span} days ago<small></p>`);
        }
        else {
            document.write(`<p><small>${this.#date.toLocaleDateString()}<small></p>`);
        }
        document.write(`<p>${this.#text}</p>`);
        //Дописать массив тегов
    }
}



//Task 1
print1.print("Lorem ipsum dolor sit amet.");
print2.print("Lorem ipsum dolor sit amet.");
print3.print("Lorem ipsum dolor sit amet.");