const eMailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.forms.registrationFrom.addEventListener("submit", onSubmit);



function onSubmit(e) {
    e.preventDefault();
    if(eMailRegExp.test(document.forms.registrationFrom.elements.emailInput.value)) { //Пример проверки валидности ввода E-Mail с помошью регкуярного выражения (RegExp)
        document.getElementById("wrongEMailDiv").style.visibility = "hidden";
    }
    else {
        document.getElementById("wrongEMailDiv").style.visibility = "visible";
        return false;
    }
    //Проверяем пароль
}