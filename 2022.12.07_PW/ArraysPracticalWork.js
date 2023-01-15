let randomNumbers = []; //Пример создания массива
for (let i = 0; i < 10; i++) {
    randomNumbers[i] = Math.floor(Math.random() * 10); //Пример генерации рандомных чисел
} //Пример определения элементов массива "по ходу"

let randomNumbersSecond = Array.from(randomNumbers, n => n + 1); //Пример создания массива с использованием Array.from

let fruits = ["Apple", "Mango", "Lemon", "Lime", "Banana"];

//Task 1.1
ShowArray(randomNumbers);

//Task 1.2
ShowEvenElems(randomNumbers);

//Task 1.3
console.log(GetElemsSum(randomNumbers));

//Task 1.4
console.log(GetMaxElem(randomNumbers));

//Task 1.5
PushOnIndex(randomNumbers, 3, 18);
ShowArray(randomNumbers);

//Task 1.6
DeleteOnIndex(randomNumbers, 3);
ShowArray(randomNumbers);

//Task 2.1
let newArr = JoinTwoArrays(randomNumbers, randomNumbersSecond);
console.log("_______");
ShowArray(randomNumbers);
ShowArray(randomNumbersSecond);
ShowArray(newArr);

//Task 2.2
newArr = JoinTwoArraysCommonElems(randomNumbers, randomNumbersSecond);
console.log("_______");
ShowArray(randomNumbers);
ShowArray(randomNumbersSecond);
ShowArray(newArr);

//Task 2.3
newArr = ElemsFromFirstWhichNotINSecond(randomNumbers, randomNumbersSecond)
console.log("_______");
ShowArray(randomNumbers);
ShowArray(randomNumbersSecond);
ShowArray(newArr);

//Task 3.1
printFruits(fruits);

function ShowArray(arr) {
    console.log(arr.join(' ')); //Пример объединения массива в строку с помощью join().
}

function ShowEvenElems(arr) {
    let chars = [];
    for (const elem of arr) {
        if (elem % 2 == 0)
            chars.push(elem + " "); //Пример добавления элементов в массив с помощью push
    }
    console.log(chars.join(''));
}

function GetElemsSum(arr) {
    return arr.reduce((sum, current) => sum + current, 0); //Пример использования reduce
}

function GetMaxElem(arr) {
    return Math.max.apply(null, arr);
}

function PushOnIndex(arr, index, elem) {
    arr.splice(index, 0, elem); //Пример добавления в массив элемента по указанному индексу с помощью splice().
}

function DeleteOnIndex(arr, index) {
    arr.splice(index, 1);
}

function JoinTwoArrays(arr1, arr2) {

    //Вариант 1 - Левый массив без изменений - проверяем правый

    // let arr3 = Array.from(arr1);
    // arr2.forEach(function (e) {
    //     if (!arr1.includes(e)) arr3.push(e)
    // });
    // return arr3;

    //Вариант 2 - без повторений, проверяем оба массива.
    let arr3 = [];
    arr1.forEach(function (e) { //Пример перебора массива с использованием forEach
        if (!arr3.includes(e))
            arr3.push(e);
    });
    arr2.forEach(function (e) {
        if (!arr3.includes(e))
            arr3.push(e);
    });
    return arr3;
}

function JoinTwoArraysCommonElems(arr1, arr2) {
    let arr3 = [];
    arr1.forEach(function (e) {
        if (arr1.includes(e) && arr2.includes(e) && !arr3.includes(e))
            arr3.push(e);
    });
    return arr3;
}

function ElemsFromFirstWhichNotINSecond(arr1, arr2) {
    let arr3 = [];
    arr1.forEach(function (e) {
        if (!arr2.includes(e))
            arr3.push(e);
    });
    return arr3;
}

function printFruits(fruits) {
    document.write("<ul>"); //Пример отображения элементов на страницу с использованием document.write()
    fruits.forEach(e => document.write(`<li>${e}</li>`));
    document.write("</ul>");
}

function findTheFruit(fruits, name) {
    
}