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
    return arguments[0] ** arguments[1]; //Add to desctiption
}

function Task3() {
    let func = function (symb, a, b) { //Add to description
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
    for (let i = 2; i <= 9; i++){
        MultiplicationToConsoleLog(i);
    }
}

function MultiplicationToConsoleLog(digit){
    for (let i = 2; i <= 9; i++) {
        console.log(digit*i);
    }
}

function Task6() {
    alert("Hello from Task 6!");
}

function Task7() {
    console.log(SumOfTo5(1,2,3));
    console.log("\n");
    console.log(SumOfTo5(1));
    console.log("\n");
    console.log(SumOfTo5(1,2,3,4,5,6));
    console.log("\n");
    console.log(SumOfTo5(1,2,3,4,5));
}

function SumOfTo5(a, ...x){ //Add to description
    if(x.length > 4)
    {
        return "Input error";
    }
    if(x.length == 0)
    {
        return a;
    }
    for (i in x) {
        a+=x[i];
    }
    return a;
}

function Task8() {

}

function Task9() {

}

function Task10() {

}