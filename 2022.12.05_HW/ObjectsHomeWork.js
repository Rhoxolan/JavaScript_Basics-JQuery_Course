let auto = { //Пример использования синтаксиса массивов при определении свойств.
    ["mark"]: "Renault", //Вариант 1 определения свойств - с использованием квадратных скобок
    "model": "Logan II", //Вариант 2 определения свойств - с использованием строк
    "year of issue": 2017, //Пример разделенных пробелом названий свойств, с использованием синтаксиса массивов
    "average speed": 75
}

console.log(GetCarInfo(auto));
console.log(GetTimeOnRoad(auto, 30));

function GetCarInfo(car) {
    //Пример использования синтаксиса массивов при вызове свойств
    return `${car["mark"]} ${car["model"]}, ${car["year of issue"]} - average speed ${car["average speed"]} km/h` 
}

function GetTimeOnRoad(car, km) {
    return ((km * 1.25) / car["average speed"]) * 60;
}