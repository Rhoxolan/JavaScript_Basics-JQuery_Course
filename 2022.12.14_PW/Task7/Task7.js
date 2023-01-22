//Пример поиска элементов на странице по селекторам элемента с помощью querySelectorAll()
let tElems = document.querySelectorAll('td, th');
tElems.forEach(e => e.onmousemove = e => e.srcElement.style["background-color"] = "red");