let users;
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users", false); //Пример синхронного AJAX запроса
xhr.onload = () => {
    if (xhr.status == 200) {
        users = JSON.parse(xhr.responseText);
    }
    else {
        console.log(`Server response: ${xhr.responseText}`);
    }
};
xhr.send();

for (const u of users) {
    let newDiv = document.createElement("div");
    newDiv.className = "userDiv";
    newDiv.innerText = u.name;
    document.getElementById("usersDiv").appendChild(newDiv);
}