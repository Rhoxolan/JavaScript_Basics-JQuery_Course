let users;
$.getJSON("https://jsonplaceholder.typicode.com/users").done((d) => { //Пример get-запроса в jQuery c помошью метода getJSON;
    users = d;
    for (const u of users) {
        $('#usersDiv').append(`<div class="userDiv">${u.name}</div>`); //Пример добавления элементов в jQuery с помошью метода append().
    }
}).fail((d) => console.log(d.status));

//Пример использования метода on в jQuery для установки обработчиков добавленным элементам страницы.
$("#usersDiv").on('click', '.userDiv', function () {
    $("#nameTd").text(users.find(u => u.name == $(this).text()).name); //Пример установки и возвращения innerText элемента с помощью метода text() в jQuery.
    $("#userNameTd").text(users.find(u => u.name == $(this).text()).username);
    $("#addressTd").text(users.find(u => u.name == $(this).text()).address.city);
    $("#eMailTd").text(users.find(u => u.name == $(this).text()).email);
    $("#phoneTd").text(users.find(u => u.name == $(this).text()).phone);
    $("#websiteTd").text(users.find(u => u.name == $(this).text()).website);
    $("#postsDiv").text("");
});

//Переделать под jQuery
document.getElementById("showPostsButton").addEventListener("click", e => {
    if (document.getElementById("nameTd").innerText != "") {
        const postsRequest = new XMLHttpRequest();
        postsRequest.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${users.find(u => u.name == document.getElementById("nameTd").innerText).id}`, false);
        let posts;
        postsRequest.onload = () => {
            if (postsRequest.status == 200) {
                posts = JSON.parse(postsRequest.responseText);
                let postsDiv = document.getElementById("postsDiv");
                let headerDiv = document.createElement("div");
                headerDiv.id = "headerDiv";
                let h = document.createElement("h3");
                h.innerText = "User's posts";
                headerDiv.appendChild(h);
                postsDiv.appendChild(headerDiv);
                posts.forEach(p => {
                    let postDiv = document.createElement("div");
                    postDiv.className = "postDiv";
                    let postTitle = document.createElement("h5");
                    postTitle.innerText = p.title;
                    postDiv.appendChild(postTitle);
                    let post = document.createElement("div");
                    post.innerText = p.body;
                    postDiv.appendChild(post);
                    postsDiv.appendChild(postDiv);
                });
            }
            else {
                console.log(`Server response: ${postsRequest.responseText}`);
            }
        };
        postsRequest.send();
    }
});