document.querySelectorAll(".arrowDiv").forEach(e => e.onclick = UpNDown);
const numericSpan = document.getElementById("numericSpan");

function UpNDown(e) {
    if (e.composedPath()[1].id == "upArrow") {
        numericSpan.innerText = +numericSpan.innerText + 1;
    }
    if (e.composedPath()[1].id == "downArrow") {
        numericSpan.innerText = +numericSpan.innerText - 1;
    }
}