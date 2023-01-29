const eMailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.forms.registrationFrom.addEventListener("submit", onSubmit);

function onLoad() {
    document.cookie.split('; ').forEach(c => { //Пример работы с cookie
        if (c.includes("email"))
        location.replace("/userInfoIndex.html"); //Пример смены страницы без сохранения в истории с помошью location.replace()
    });
}

function onSubmit(e) {
    e.preventDefault();
    let checker = false;
    if (eMailRegExp.test(document.forms.registrationFrom.elements.emailInput.value)) { //Пример проверки валидности ввода E-Mail с помошью регулярного выражения (RegExp)
        document.getElementById("wrongEMailDiv").style.visibility = "hidden";
        document.cookie = `email=${document.forms.registrationFrom.elements.emailInput.value}; max-age=3600`; //Пример добавления cookie; пример добавления cookie с параметром автоудаления через час
    }
    else {
        document.getElementById("wrongEMailDiv").style.visibility = "visible";
        checker = true;
    }
    if (document.forms.registrationFrom.elements.passwordInput.value ===
        document.forms.registrationFrom.elements.repeatPasswordInput.value) {
        document.getElementById("wrongPasswordDiv").style.visibility = "hidden";
        document.cookie = `password=${document.forms.registrationFrom.elements.passwordInput.value}; max-age=3600`;
    }
    else {
        document.getElementById("wrongPasswordDiv").style.visibility = "visible";
        checker = true;
    }
    if (checker) {
        return false;
    }
    location.replace("/userInfoIndex.html");
}