function onLoad() {
    document.cookie.split('; ').forEach(c => {
        if (c.includes("email"))
            document.getElementById("eMailSpan").innerText = c.split('=')[1];
        return;
    });
}

document.getElementById("exitButton").addEventListener("click", onExitButtonClick);
document.forms.userInfoFrom.addEventListener("submit", onSubmit);

function onExitButtonClick(e) {
    document.cookie.split('; ').forEach(c => document.cookie = `${c}; max-age=-1`); //Пример алгоритма по удалению всех coockies c document.cookie
    location.replace("/registrationIndex.html");
}

function onSubmit(e) {
    e.preventDefault();
    let checker = false;
}