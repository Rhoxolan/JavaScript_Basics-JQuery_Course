function onLoad() {
    document.cookie.split('; ').forEach(c => {
        if (c.includes("email"))
            document.getElementById("eMailSpan").innerText = c.split('=')[1];
            return;
    });
}

document.getElementById("exitButton").addEventListener("click", onExitButtonClick);

function onExitButtonClick(e) {
    
}