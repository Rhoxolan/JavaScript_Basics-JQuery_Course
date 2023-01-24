const divsDiv = document.getElementById("divsDiv");

document.getElementById("addDivButton").onclick = e => {
    divsDiv.appendChild(document.createElement("div")); //Пример добавления элементов с использованием document.createElement()
    divsDiv.lastChild.className = "coloredDiv"; //Пример обращения к элементу-lastChild
};