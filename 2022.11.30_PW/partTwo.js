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
    return order().direct(start, finish);
}

function order() { //Пример применения паттерна модуль
    let outString = ""; //Рещить проблему
    return {
        direct: function (start, finish) {
            if (start == finish && outString == "") {
                return `${start}`;
            }
            if (start == finish) {
                outString = outString.concat(start + " ");
                return outString;
            }
            outString = outString.concat(start + " ");
            start++;
            return order().direct(start, finish);
        },
        reverse: function (start, finish) {
            if (finish == start && outString == "") {
                return `${finish}`;
            }
            if (finish == start) {
                outString = outString.concat(finish + " ");
                return outString;
            }
            outString = outString.concat(finish + " ");
            finish--;
            return order().reverse(start, finish);
        }
    }
}

// function DirectOrder(start, finish, outString = "") { //Пример определения для параметра значения по умолчанию
//     if (start == finish && outString == "") {
//         return `${start}`;
//     }
//     if (start == finish) {
//         outString = outString.concat(start + " ");
//         return outString;
//     }
//     outString = outString.concat(start + " ");
//     start++;
//     return DirectOrder(start, finish, outString);
// }

// function ReverseOrder(start, finish, outString = "") {
//     if (finish == start && outString == "") {
//         return `${finish}`;
//     }
//     if (finish == start) {
//         outString = outString.concat(finish + " ");
//         return outString;
//     }
//     outString = outString.concat(finish + " ");
//     finish--;
//     return ReverseOrder(start, finish, outString);
// }