const divsDiv = document.getElementById("divsDiv");

document.getElementById("addDivButton").onclick = e => {
    divsDiv.appendChild(document.createElement("div")); //Пример добавления элементов с использованием document.createElement()
    const lastChild = divsDiv.lastChild;
    lastChild.className = "coloredDiv"; //Пример обращения к элементу-lastChild
    lastChild.style.backgroundColor = `rgb(
        ${Math.round(Math.random() * 255)},
        ${Math.round(Math.random() * 255)},
        ${Math.round(Math.random() * 255)})`;
    lastChild.onclick = e => lastChild.remove(); //Пример удаления элемента с использованием remove
};