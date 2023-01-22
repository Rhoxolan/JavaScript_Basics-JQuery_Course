

function textChenger(e) {
    let textDiv = document.getElementById("textDiv");
    switch (e.id) {
        case "JsDiv":
            textDiv.innerText = "Lorem ipsum dolor sit amet JavaScript.";
            break;
        case "HTMLDiv":
            textDiv.innerText = "Lorem ipsum dolor sit amet HTML.";
            break;
        case "CssDiv":
            textDiv.innerText = "Lorem ipsum dolor sit amet CSS.";
            break;
        default:
            break;
    }
}