let randomNumbers = []; //Пример создания массива
for (let i = 0; i < 10; i++) {
    randomNumbers[i] = Math.floor(Math.random() * 10); //Пример генерации рандомных чисел
} //Пример определения элементов массива "по ходу"

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

