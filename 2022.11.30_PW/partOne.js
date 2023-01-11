let userChoice;

// while(true)
// {
userChoice = +prompt("Please select the task (1 - 10)");

if (userChoice > 10) {
    // continue;
}
if (userChoice > 9) {
    Task10();
}
else if (userChoice > 8) {
    Task9();
}
else if (userChoice > 7) {
    Task8();
}
else if (userChoice > 6) {
    Task7();
}
else if (userChoice > 5) {
    Task6();
}
else if (userChoice > 4) {
    Task5();
}
else if (userChoice > 3) {
    Task4();
}
else if (userChoice > 2) {
    Task3();
}
else if (userChoice > 1) {
    Task2();
}
else if (userChoice > 0) {
    Task1();
}
else if (userChoice < 0) {
    //continue;
}


// }

function Task1() {
    let firstDigit = +prompt("Please enter the first digit:");
    let secondDigit = +prompt("Please enter the second digit:");
    alert(`The lesser digit is ${LesserDefine(firstDigit, secondDigit)}`);
}

function LesserDefine(a, b) {
    if (a < b) {
        return a;
    }
    return b;
}

function Task2() {
    let digit = +prompt("Please enter the digit");
    let pow = +prompt("Please enter the pow");
    alert(`The pow of the digit ${digit} is ${PowOfDigit(digit, pow)}`);
}

function PowOfDigit() {
    return arguments[0] ** arguments[1]; //Пример использования общедоступного массива arguments 
}

function Task3() {
    let func = function (symb, a, b) { //Пример создания анонимной функции и присваивания её переменной
        switch (symb) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                return a / b;
            default:
                return null;
        }
    };

    let a = +prompt("Please enter the left operand");
    let b = +prompt("Please enter the right operand");
    let oper = prompt("Please enter the operator");
    alert(`Result is ${func(oper, a, b)}`);
}

function Task4() {
    alert("Hello from Task 4!");
}

function Task5() {
    for (let i = 2; i <= 9; i++) {
        MultiplicationToConsoleLog(i);
    }
}

function MultiplicationToConsoleLog(digit) {
    for (let i = 2; i <= 9; i++) {
        console.log(digit * i);
    }
}

function Task6() {
    alert("Hello from Task 6!");
}

function Task7() {
    console.log(SumOrMax(SumOfTo5, 1, 2, 3));
    console.log("\n");
    console.log(SumOrMax(SumOfTo5, 1));
    console.log("\n");
    console.log(SumOrMax(SumOfTo5, 1, 2, 3, 4, 5, 6));
    console.log("\n");
    console.log(SumOrMax(SumOfTo5, 1, 2, 3, 4, 5));
}

function Task8() {
    console.log(SumOrMax(MaxFromTo5, 1, 2, 3));
    console.log(SumOrMax(MaxFromTo5, 1));
    console.log(SumOrMax(MaxFromTo5, 1, 5, 8, 15, 23, 18));
    console.log(SumOrMax(MaxFromTo5, 1, 5, 8, 23, 18));
}

function SumOrMax(func, a, ...x) { //Пример передаче функции в качестве аргумента
    return func(a, ...x);
}

function SumOfTo5(a, ...x) { //Пример функции с переменным количеством параметров
    if (x.length > 4) {
        return "Input error";
    }
    if (x.length == 0) {
        return a;
    }
    for (i in x) {
        a += x[i];
    }
    return a;
}

function MaxFromTo5(a, ...x) {
    if (x.length > 4) {
        return "Input error";
    }
    if (x.length == 0) {
        return a;
    }
    return Math.max.apply(null, x);
}

function Task9() {
    EvenOrOdd(1, 10, true);
    console.log("\n");
    EvenOrOdd(1, 10, false);
}

function EvenOrOdd(min, max, even) {
    for (let index = min; index < max; index++) {
        if (even) {
            if (index % 2 == 0)
                console.log(index);
        }
        else {
            if (index % 2 != 0)
                console.log(index);
        }
    }
}

function Task10() {

}

function GetTomorrow(day, moth, year) {
    //Тут сделать проверку, из проверки сделать переменную вар типа дате, то есть проверить вар из блока.
}