function onLoad() {
    let checker = false;
    let cookies = document.cookie.split('; ');
    for (const c of cookies) {
        if (c.includes("email")) {
            document.getElementById("eMailSpan").innerText = c.split('=')[1];
            checker = true;
            break;
        }
    }
    if (!checker) {
        location.replace("/registrationIndex.html");
        return;
    }
    cookies.forEach(c => {
        if (c.split('=')[0] == "firstName") {
            document.forms.userInfoFrom.elements.firstNameInput.value = c.split('=')[1];
            return; //return здесь остагавливает текущую итерацию
        }
        if (c.split('=')[0] == "lastName") {
            document.forms.userInfoFrom.elements.lastNameInput.value = c.split('=')[1];
            return;
        }
        if (c.split('=')[0] == "yearOfBirth") {
            document.forms.userInfoFrom.elements.yearOfBirthInput.value = c.split('=')[1];
            return;
        }
        if (c.split('=')[0] == "phoneNumber") {
            document.forms.userInfoFrom.elements.phoneNumberInput.value = c.split('=')[1];
            return;
        }
        if (c.split('=')[0] == "skype") {
            document.forms.userInfoFrom.elements.skypeInput.value = c.split('=')[1];
            return;
        }
        if (c.split('=')[0] == "gender") {
            document.forms.userInfoFrom.elements.genderInput.value = c.split('=')[1];
            return;
        }
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
        document.cookie = "phoneNumber=; max-age=-1";
    }
    if (document.forms.userInfoFrom.elements.skypeInput.value != "") {
        if (document.forms.userInfoFrom.elements.skypeInput.value.length < 50) {
            document.getElementById("wrongSkypeDiv").style.visibility = "hidden";
            document.cookie = `skype=${document.forms.userInfoFrom.elements.skypeInput.value}; max-age=3600`;
        }
        else {
            document.getElementById("wrongSkypeDiv").style.visibility = "visible";
            checker = true;
        }
    }
    else {
        document.cookie = "skype=; max-age=-1";
    }
    if (checker) {
        return false;
    }
    document.cookie = `gender=${document.forms.userInfoFrom.elements.genderInput.value}; max-age=3600`;
    alert("Data is updated");
}