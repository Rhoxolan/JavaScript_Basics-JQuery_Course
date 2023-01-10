let userChoice;

// while(true)
// {
    userChoice = +prompt("Please select the task (1 - 10)");

    if(userChoice > 10)
    {
        // continue;
    }
    if(userChoice > 9)
    {
        Task10();
    }
    else if(userChoice > 8)
    {
        Task9();
    }
    else if(userChoice > 7)
    {
        Task8();
    }
    else if(userChoice > 6)
    {
        Task7();
    }
    else if(userChoice > 5)
    {
        Task6();
    }
    else if(userChoice > 4)
    {
        Task5();
    }
    else if(userChoice > 3)
    {
        Task4();
    }
    else if(userChoice > 2)
    {
        Task3();
    }
    else if(userChoice > 1)
    {
        Task2();
    }
    else if(userChoice > 0)
    {
        Task1();
    }
    else if(userChoice < 0)
    {
        //continue;
    }


// }

function Task1()
{
    let firstDigit = +prompt("Please enter the first digit:");
    let secondDigit = +prompt("Please enter the second digit:");
    alert(`The lesser digit is ${LesserDefine(firstDigit, secondDigit)}`);
}

function LesserDefine(a, b)
{
    if(a < b)
    {
        return a;
    }
    return b;
}

function Task2()
{
 
}

function Task3()
{

}

function Task4()
{

}

function Task5()
{

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