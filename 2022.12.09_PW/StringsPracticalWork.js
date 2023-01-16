const spamWords = ["безкоштовно", "збільшення", "продажів", "тільки сьогодні", "не видаляйте", "ххх"];

//Task 1.
const str1 = "str_1"
const str2 = new String("str2");
const str3 = "str_3";

console.log(getLongerString(str1, str2));
console.log(getLongerString(str2, str3));
console.log(getLongerString(str1, str3));

//Task 2.
console.log(str3);
console.log(firstCharToUpperElem(str3));

//Task 3.
const string = "string";
console.log(vowelsCount(str1));
console.log(vowelsCount(string));
console.log(vowelsCount("stroka"));
console.log(vowelsCount("String Of Strings"));
console.log(vowelsCount("String\nOf\nStrings"));

//Task 4.
console.log(spamDetector("Сообщение"));
console.log(spamDetector("Тільки сьогодні! Безкоштовно! 2 за ціною 3-х!"));

//Task 5.
console.log(TruncateString("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta ac.", 75));
console.log(TruncateString("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta ac.", 35));

//Task 6.
console.log(isPalindrom("ABCCBA"));
console.log(isPalindrom("ABCsCBA"));
console.log(isPalindrom("ABCdsCBA"));

//Task 7.
console.log(wordsCount("Lorem ipsum dolor sit amet."));
console.log(wordsCount("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut felis dapibus lacus vehicula rhoncus."));

//Task 8.
console.log(GetLongestWord("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut felis dapibus lacus vehicula rhoncus."));

//Task 9.


function getLongerString(str1, str2) {
    if (str1.length > str2.length) { //Пример сравнения строк по длине с помошью length
        return 1;
    }
    if (str1.length < str2.length) {
        return -1;
    }
    if (str1.length == str2.length) {
        return 0
    }
    throw "Unknown exception";
}

function firstCharToUpperElem(str1) {
    return str1[0].toUpperCase() + str1.slice(1); //Пример обрезки строки с помощью метода slice()
}

function vowelsCount(str) {
    let res = str.match(/[euioa]/ig); //Пример использования регулярного выражения и метода match() для подсчета гласных в строке
    if (res != null) {
        return res.length;
    }
    return 0;
}

function spamDetector(str) {
    for (const word of spamWords) {
        if (str.toUpperCase().includes(word.toUpperCase())) //Пример поиска определенной подстроки с помошью include()
            return true;
    }
    return false;
}

function TruncateString(str, maxlength) {
    if (str.length > maxlength) {
        return str.substring(0, maxlength + 1)
            .concat("...");
    }
    return str;
}

function isPalindrom(str) { //Пример функции, определяющей, является ли строка палиндромом.
    //Вариант 1 - циклом. Если строка, которая является палиндромом, будет неравной по к-ву символов, например "ABCsCBA" - вернет true.

    // for(let i = 0; i < str.length / 2; i++) {
    //     if(str[i].toUpperCase() != str[str.length - (i + 1)].toUpperCase())
    //         return false;
    // }
    // return true;

    //Вариант 2 - с разделением строки на две части.
    let firstPartOfTheString = str.slice(0, str.length / 2).toUpperCase();
    let reversedsecondPartOfTheString = Array.from(
        str.slice(str.length / 2).toUpperCase())
        .reverse()
        .join('');
    if (firstPartOfTheString === reversedsecondPartOfTheString) //Пример сравнения строк с использования оператора строгого равно ("===").
        return true;
    return false;
}

function wordsCount(str) {
    return str.split(" ").length;
}

function GetLongestWord(str) {
    let strArray = str.split(" ");
    strArray.sort(function (left, right) { //Пример сортировки массива по длине строчных элементов с помошью метода sort().
        if(left.length < right.length)
            return 1;
        if(left.length > right.length)
            return -1;
        return 0;
    });
    return strArray[0];
}

function averageWordsLength(str) {
    
}