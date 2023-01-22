//Пример поиска элементов на странице по селекторам элемента с помощью querySelectorAll()
let tElems = document.querySelectorAll('td, th');
tElems.forEach(e => e.onmouseover = e => e.srcElement.style["background-color"] = "#FFA984");
tElems.forEach(e => e.onmouseout = e => e.srcElement.style["background-color"] = "");