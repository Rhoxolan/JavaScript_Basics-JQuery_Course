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
        this.#date = new Date(year, month - 1, day);
    }
    print() {
        document.write(`<h2>${this.#header}</h2>`);
        let date = new Date();
        let span = (date - this.#date) / 86400000; //Пример определения к-ва дней по временному промежутку
        if (span > 7) {
            document.write(`<p><small>${this.#date.toLocaleDateString()}</small></p>`);
        }
        else if (span > 1) {
            document.write(`<p><small>${span.toFixed()} days ago</small></p>`);
        }
        else if (span < 1) {
            document.write("<p><small>hodie</small></p>");
        }
        document.write(`<p>${this.#text}</p>`);
        document.write(`<div style="display: flex; gap:7.5px">`);
        for (const tag of this.#tags) {
            document.write(`<div>#${tag}</div>`);
        }
        document.write(`</div>`);
    }
}

let article1 = new NewsArticle("Lorem ipsum", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente repudiandae ex cumque minima reprehenderit ducimus accusamus perferendis sit harum aperiam.",
    ["lorem", "ipsum", "consectetur"], 2023, 1, 19);
let article2 = new NewsArticle("Lorem ipsum", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente repudiandae ex cumque minima reprehenderit ducimus accusamus perferendis sit harum aperiam.",
    ["lorem", "ipsum", "consectetur"], 2023, 1, 15);
let article3 = new NewsArticle("Lorem ipsum", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente repudiandae ex cumque minima reprehenderit ducimus accusamus perferendis sit harum aperiam.",
    ["lorem", "ipsum", "consectetur"], 2022, 10, 10);

class NewsLine {
    #news = new Array();
    get news() { //Пример определения get-метода
        return this.#news;
    }
    print() {
        this.#news.forEach(n => n.print());
    }
}

let newsLine = new NewsLine();
newsLine.news.push(article1, article2, article3);

//Task 1
print1.print("Lorem ipsum dolor sit amet.");
print2.print("Lorem ipsum dolor sit amet.");
print3.print("Lorem ipsum dolor sit amet.");
document.write("<hr>");

//Task 2
article1.print();
article2.print();
article3.print();
document.write("<hr>");

//Task 3
newsLine.print();