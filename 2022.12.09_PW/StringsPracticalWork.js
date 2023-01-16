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


function getLongerString(str1, str2) {
    if(str1.length > str2.length) { //Пример сравнения строк по длине с помошью length
        return 1;
    }
    if(str1.length < str2.length) {
        return -1;
    }
    if(str1.length == str2.length) {
        return 0
    }
    throw "Unknown exception";
}

function firstCharToUpperElem(str1) {
    return str1[0].toUpperCase() + str1.slice(1); //Пример обрезки строки с помощью метода slice()
}

function vowelsCount(str) {
    let res = str.match(/[euioa]/ig); //Пример использования регулярного выражения и метода match() для подсчета гласных в строке
    if(res != null){
        return res.length;
    }
    return 0;
}


