const milesConvertsValue = 0.621371;
let userChoice;

while (true) {
    userChoice = +prompt("Please select the task (1 - 10)");

    switch (userChoice) {
        case 1: Task1();
            break;

        case 2: Task2();
            break;

        case 3: Task3();
            break;

        case 4: Task4();
            break;

        case 5: Task5();
            break;

        case 6: Task6();
            break;

        case 7: Task7();
            break;

        case 8: Task8();
            break;

        case 9: Task9();
            break;

        case 10: Task10();
            break;
    }
}

function Task1() {
    let digit = +prompt("Please enter your digit");
    alert(`Second power of digit ${digit} is ${digit ** 2}!`);
}

function Task2() {
    let firstDigit = +prompt("Please enter first digit");
    let secondDigit = +prompt("Please enter second digit");
    alert(`Avarege of the your digits is ${(firstDigit + secondDigit) / 2}`);
}

function Task3() {
    let sideLenth = +prompt("Please input side lingth of the square");
    alert(`Area of the square is ${sideLenth ** 2}`);
}

function Task4() {
    let cilometers = +prompt("Please input the cilometers length. You will get the miles length.");
    alert(`Miles length is ${cilometers * milesConvertsValue}`);
}

function Task5() {
    let firstDigit = +prompt("Please enter first digit");
    let secondDigit = +prompt("Please enter second digit");
    alert(`Operations with these digits:\n+ ${firstDigit + secondDigit}\n` +
        `- ${firstDigit - secondDigit}\n* ${firstDigit * secondDigit}\n` +
        `/ ${firstDigit / secondDigit}`);
}

function Task6() {
    let a = +prompt("Please enter 'a' value");
    let b = +prompt("Please enter 'b' value");
    alert(`${-b / a}`);
}

function Task7() {
    let hh = +prompt("Please enter the hours (0 - 23)");
    if (hh > 23 || hh < 0) {
        alert("Input error!");
        return;
    }
    let mm = +prompt("Please enter the minutes (0 - 59)");
    if (mm > 59 || hh < 0) {
        alert("Input error!");
        return;
    }
    let nowDate = new Date();
    let tomorrowDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + 1);
    let userDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), hh, mm);
    let diff = tomorrowDate - userDate;

    let minutes = ((diff / (1000 * 60)) % 60).toFixed();
    let hours = ((diff / (1000 * 60 * 60)) % 24).toFixed();

    alert(`${hours} hours ${minutes} minutes left until tomorrow`);
}

function Task8() {
    let tripleNumber = +prompt("Please enter the triple number");
    if (tripleNumber > 999 || tripleNumber < 100) {
        alert("Input error!");
        return;
    }
    let secondDigit = Math.floor((tripleNumber / 10) % 10);
    alert(`Second digit of number ${tripleNumber} is ${secondDigit}`);
}

function Task9() {
    let fiveDigitNumber = prompt("Please enter the five-digit number");
    if (fiveDigitNumber > 99999 || fiveDigitNumber < 10000) {
        alert("Input error!");
        return;
    }
    let firstDigit = fiveDigitNumber[0];
    let lastdigit = fiveDigitNumber[4];
    let slicedNumber = fiveDigitNumber.slice(1, 4);
    let newFiveDigitNumber = lastdigit.concat(slicedNumber).concat(firstDigit);
    alert(`Reverse number if ${newFiveDigitNumber}`);
}

function Task10() {
    let totalSalesAmount = prompt("Please enter the total sales amount:");
    alert(`Worker salary is ${250 + totalSalesAmount / 10}$`);
}