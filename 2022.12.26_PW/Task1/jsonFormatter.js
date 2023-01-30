document.getElementById("submitButton").addEventListener("click", onClick);

function onClick(e) {
    document.getElementById("formatErrorH").style.visibility = "hidden";
    let buff;
    try {
        buff = JSON.parse(document.getElementById("jsonTextArea").value);
    }
    catch {
        document.getElementById("formatErrorH").style.visibility = "visible";
        return;
    }
    document.getElementById("formattedJsonArea").value = JSON.stringify(buff, null, 3);
}