function Point(x, y) { //Пример создания функции-конструктора
    this.x = x;
    this.y = y;
}

let rectangle = { //Пример создания объекта
    left_top: new Point(40, 20),
    right_bottom: new Point(350, 570),
    toString() { //Пример переопрделения метода toString
        return `${this.left_top.x} ${this.left_top.y} - ${this.right_bottom.x} ${this.right_bottom.y}` //Пример использования this
    }
};
rectangle.name = "rectA"; //Пример определения свойства в объекте после его создания

//Task 1
console.log(ShowRectangleInfo(rectangle));

//Task 2
console.log(ShowRectangleWidth(rectangle));

//Task 3
console.log(ShowRectangleHeight(rectangle));

//Task 4
console.log(ShowRectangleSpace(rectangle));

//Task 5
console.log(ShowRectangleP(rectangle));

//Task 6
EditRectangleWidth(rectangle, 50);
console.log(ShowRectangleWidth(rectangle));


//Попробовать потом заменить на модули

function ShowRectangleInfo(r) {
    return `${r.name}: ${r}`
}

function ShowRectangleWidth(r) {
    return r.right_bottom.y - r.left_top.y;
}

function ShowRectangleHeight(r) {
    return r.right_bottom.x - r.left_top.x;
}

function ShowRectangleSpace(r) {
    return ShowRectangleWidth(r) * ShowRectangleHeight(r);
}

function ShowRectangleP(r) {
    return 2 * (ShowRectangleWidth(r) + ShowRectangleHeight(r));
}

function EditRectangleWidth(r, p_count) {
    r.left_top.y -= p_count / 2;
    r.right_bottom.y += p_count / 2;
}
