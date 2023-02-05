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

$("#showPostsButton").click(e => {
    if ($("#nameTd").text() != "") {
        $.getJSON(`https://jsonplaceholder.typicode.com/posts?userId=${users.find(u => u.name == $("#nameTd").text()).id}`)
            .done((d) => {
                $("#postsDiv").append("<div id='headerDiv'><h3>User's posts</h3></div>");
                d.forEach(p => {
                    $("#postsDiv").append(`<div class='postDiv'><h5>${p.title}</h5><div>${p.body}</div></div>`);
                })
            })
            .fail((d) => console.log(d.status));
    }
});