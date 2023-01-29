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
    if (/^(?=.{0,20}$)[a-z]/i.test(document.forms.userInfoFrom.elements.firstNameInput.value)) { //Пример проверки ввода с помощью регулярного выражения; пример ограничения количетсва символов с помощью регулярного выражения
        document.getElementById("wrongFirstNameDiv").style.visibility = "hidden";
        document.cookie = `firstName=${document.forms.userInfoFrom.elements.firstNameInput.value}; max-age=3600`;
    }
    else {
        document.getElementById("wrongFirstNameDiv").style.visibility = "visible";
        checker = true;
    }
    if (/^(?=.{0,20}$)[a-z]/i.test(document.forms.userInfoFrom.elements.lastNameInput.value)) {
        document.getElementById("wrongLastNameDiv").style.visibility = "hidden";
        document.cookie = `lastName=${document.forms.userInfoFrom.elements.lastNameInput.value}; max-age=3600`;
    }
    else {
        document.getElementById("wrongLastNameDiv").style.visibility = "visible";
        checker = true;
    }
    if (+document.forms.userInfoFrom.elements.yearOfBirthInput.value >= 1900 &&
        document.forms.userInfoFrom.elements.yearOfBirthInput.value <= +new Date().getFullYear()) {
        document.getElementById("wrongYearOfBirthDiv").style.visibility = "hidden";
        document.cookie = `yearOfBirth=${document.forms.userInfoFrom.elements.yearOfBirthInput.value}; max-age=3600`;
    }
    else {
        document.getElementById("wrongYearOfBirthDiv").style.visibility = "visible";
        checker = true;
    }
    if (document.forms.userInfoFrom.elements.phoneNumberInput.value != "") {
        if (/^\+?\d{10,12}$/.test(document.forms.userInfoFrom.elements.phoneNumberInput.value)) {
            document.getElementById("wrongPhoneNumberDiv").style.visibility = "hidden";
            document.cookie = `phoneNumber=${document.forms.userInfoFrom.elements.phoneNumberInput.value}; max-age=3600`;
        }
        else {
            document.getElementById("wrongPhoneNumberDiv").style.visibility = "visible";
            checker = true;
        }
    }
    else {
        //Удалить кук телефона
    }
    if (checker) {
        return false;
    }
    document.cookie = `gender=${document.forms.userInfoFrom.elements.genderInput.value}; max-age=3600`;
}