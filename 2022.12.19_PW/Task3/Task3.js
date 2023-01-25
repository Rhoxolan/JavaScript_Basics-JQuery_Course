const textP = document.getElementById("textP");
document.querySelectorAll(".cell").forEach(c => c.onclick = e =>
    textP.style.color = e.srcElement.style.backgroundColor);