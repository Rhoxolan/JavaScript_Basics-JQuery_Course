//Пример работы с мышиным событием mousemove; пример добавления обработчика события с помошью функции addEventListener()
let secondTaskDiv = document.getElementById("secondTaskDiv");
secondTaskDiv.addEventListener("mousemove", (e) =>
    document.getElementById("coordinatP").innerText = `X = ${e.pageX}, Y = ${e.pageY}`);
secondTaskDiv.addEventListener("mousedown", (e) => { //Пример работы с событием mousedown
    console.log(e);
    if (e.button === 0) { //Пример определения нажатой на мышке кнопки
        alert("Left!");
        return;
    }
    if (e.button === 1) {
        alert("Center!");
        return;
    }
    if (e.button === 2) {
        alert("Right");
        return;
    }
    alert("Undefined button");
});