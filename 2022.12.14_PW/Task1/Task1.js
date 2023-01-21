 //Пример работы с событием onclick; пример работы с элементом HTML с использованием getElementById().
document.getElementById("generateRandButton").onclick = (e) =>
document.getElementById("task1randNumb").innerText = Math.floor(Math.random() * 100);