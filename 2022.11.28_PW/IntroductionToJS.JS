const milesConvertsValue = 0.621371;
let userChoice;

// while(true)
// {
    userChoice = +prompt("Please select the task (1 - 10)");

    switch(userChoice)
    {
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
// }

function Task1()
{
    let digit = +prompt("Please enter your digit");
    alert(`Second power of digit ${digit} is ${digit**2}!`);

}

function Task2()
{
    let firstDigit = +prompt("Please enter first digit");
    let secondDigit = +prompt("Please enter second digit");
    alert(`Avarege of the your digits is ${(firstDigit + secondDigit) / 2}`);
}

function Task3()
{
    let sideLenth = +prompt("Please input side lingth of the square");
    alert(`Area of the square is ${sideLenth**2}`);
}

function Task4()
{
    let cilometers = +prompt("Please input the cilometers length. You will get the miles length.");
    alert(`Miles length is ${cilometers * milesConvertsValue}`);
}

function Task5()
{
    let firstDigit = +prompt("Please enter first digit");
    let secondDigit = +prompt("Please enter second digit");
    alert(`Operations with these digits:\n+ ${firstDigit + secondDigit}\n` +
    `- ${firstDigit - secondDigit}\n* ${firstDigit * secondDigit}\n` +
    `/ ${firstDigit / secondDigit}`);
}

function Task6()
{
    
}

function Task7()
{
    
}

function Task8()
{
    
}

function Task9()
{
    
}

function Task10()
{
    
}