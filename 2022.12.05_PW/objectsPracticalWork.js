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

//Task 7
EditRectangleHeight(rectangle, 70);
console.log(ShowRectangleHeight(rectangle));

//Task 8
EditRectangleWidthHeight(rectangle, 15, 35);
console.log(ShowRectangleWidth(rectangle));
console.log(ShowRectangleHeight(rectangle));

//Task 9
MoveAlongX(rectangle, 100);
console.log(ShowRectangleInfo(rectangle));

//Task 10
MoveAlongY(rectangle, 45);
console.log(ShowRectangleInfo(rectangle));

//Task 11
MoveAlongXY(rectangle, 3, 57);
console.log(ShowRectangleInfo(rectangle));

//Task 12
console.log(IsPointIsCenter(rectangle, 75, 118));
console.log(IsPointIsCenter(rectangle, 343.25, 441.75));


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

function EditRectangleHeight(r, p_count) {
    r.left_top.x -= p_count / 2;
    r.right_bottom.x += p_count / 2;
}

function EditRectangleWidthHeight(r, w_p_count, h_p_count) {
    EditRectangleWidth(r, w_p_count);
    EditRectangleHeight(r, h_p_count);
}

function MoveAlongX(r, p_count) {
    r.left_top.x += p_count;
    r.right_bottom.x += p_count;
}

function MoveAlongY(r, p_count) {
    r.left_top.y += p_count;
    r.right_bottom.y += p_count;
}

function MoveAlongXY(r, x_p_count, y_p_count) {
    MoveAlongX(r, x_p_count);
    MoveAlongY(r, y_p_count);
}

function IsPointIsCenter(r, px, py) {
    return px == r.left_top.x + r.right_bottom.x / 2 &&
        py == r.left_top.y + r.right_bottom.y / 2;
}
