let p = document.getElementById("textP");
document.getElementById("showHideButton").onclick = (e) => {
    if (p.style.visibility === "visible" || p.style.visibility === "") {
        p.style.visibility = "hidden"; //Пример установки свойства при вызове события
        return;
    }
    p.style.visibility = "visible";
}