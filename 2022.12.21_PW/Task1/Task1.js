//Пример работы со списком форм document.forms; пример работы с событием "submit" формы
document.forms.loginForm.addEventListener("submit", OnSubmit);

function OnSubmit(e) {
    if (document.forms.loginForm.elements.checkRememder.checked) { //Пример доступа к элементам input формы
        alert(`Hi, ${e.currentTarget[0].value}! You are remembered!`) //Альтернативный способ доступа к элементам input формы - через параметр обработчика
    }
    else {
        alert(`Hi, ${e.currentTarget[0].value}! You aren't remembered!`);
    }
}