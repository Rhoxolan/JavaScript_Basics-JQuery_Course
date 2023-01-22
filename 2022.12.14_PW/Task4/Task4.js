document.getElementById("JsDiv").onclick = textChenger;
document.getElementById("HTMLDiv").onclick = textChenger;
document.getElementById("CssDiv").onclick = textChenger;

function textChenger(e) {
    let textDiv = document.getElementById("textDiv"); 
    switch (e.srcElement.id) { //Пример определения элемента, вызвавшего событие через srcElement.id
        case "JsDiv":
            textDiv.innerText = "Lorem ipsum dolor sit amet.";
            break;
        case "HTMLDiv":
            textDiv.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing.";
            break;
        case "CssDiv":
            textDiv.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus nisi at scelerisque molestie. Suspendisse.";
            break;
        default:
            break;
    }
}