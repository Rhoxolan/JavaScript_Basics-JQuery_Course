function onLoad() {
    document.cookie.split('; ').forEach(c => {
        if (c.includes("email"))
            document.getElementById("eMailSpan").innerText = c.split('=')[1];
        return;
    });
}

document.getElementById("exitButton").addEventListener("click", onExitButtonClick);

function onExitButtonClick(e) {
    deleteCookies();
    location.href = "/registrationIndex.html";
}

function deleteCookies() {
    let currentCookies = document.cookie.split('; ');
    currentCookies.forEach(c => deleteCookie(c.split('=')[0]));
}

function deleteCookie(name) {
    setCookie(name, "", {'max-age': -1});
}

function setCookie(name, value, options = {}) {
    let updatedCookie = name + "=" + value;
    
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

function newDeleteCookies() {
    let updatedCookies = new String();
    document.cookie.split('; ').forEach(c => {
        updatedCookies += c + ";max-age=-1";
    });
    document.cookie = updatedCookies;
}