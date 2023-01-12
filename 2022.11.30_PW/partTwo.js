let userChoice;

// while (true) {
userChoice = +prompt("Please select the task (1 - 5)");
console.log(DoTask(userChoice));
// }

function DoTask(userChoice) {
    switch (userChoice) {
        case 1:
            return Task1(); //Пример возвращения функции как результат функции
        case 2:
            return Task2();
        case 3:
            return Task3();
        case 4:
            return Task4();
        case 5:
            return Task5();
        default:
            return null;
    }
}

function Task1() {
    let digit = +prompt("Enter the digit:");
    return GetFactorial(digit);
}

function GetFactorial(n) { //Пример рекурсивной функции
    if (n === 1) {
        return 1;
    }
    else {
        return n * GetFactorial(n - 1);
    }
}

function Task2() {
    let start = +prompt("Enter the start digit:");
    let finish = +prompt("Enter the finish digit:");
    return order(start, finish).direct();
}

function order(start, finish) { //Пример применения паттерна модуль (с использованием реверсивной функции)
    return {
        direct: function (outString = "") { //Пример определения для параметров значения по умолчанию
            if (start == finish && outString == "") {
                return `${start}`;
            }
            if (start == finish) {
                outString = outString.concat(start + " ");
                return outString;
            }
            outString = outString.concat(start + " ");
            start++;
            return order(start, finish).direct(outString);
        },
        reverse: function (outString = "") {
            if (finish == start && outString == "") {
                return `${finish}`;
            }
            if (finish == start) {
                outString = outString.concat(finish + " ");
                return outString;
            }
            outString = outString.concat(finish + " ");
            finish--;
            return order(start, finish).reverse(outString);
        }
    }
}

function Task3() {
    let number = +prompt("Please enter the number");
    return reverse(number);
}

function reverse(number) {
    number = parseInt(number); //Пример преобразования вещественного числа к целочисленному значению
    if(number < 10) {
        return String(number);
    }
    return String(number % 10) + String(reverse(number / 10))
}

function Task4() {
    let number = +prompt("Please enter the number");
    return SumOfTheNumber(number); //Попробовать сомовызывающуюся функцию
}

function SumOfTheNumber(number) {
    number = parseInt(number);
    if(number < 10) {
        return number;
    }
    return number % 10 + SumOfTheNumber(number / 10);
}