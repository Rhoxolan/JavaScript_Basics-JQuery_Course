let users;
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users", false); //Пример синхронного AJAX запроса
xhr.onload = () => {
    if (xhr.status == 200) {
        users = JSON.parse(xhr.responseText);
        for (const u of users) {
            let newDiv = document.createElement("div");
            newDiv.className = "userDiv";
            newDiv.innerText = u.name;
            document.getElementById("usersDiv").appendChild(newDiv);
        }
    }
    else {
        console.log(`Server response: ${xhr.responseText}`);
    }
};
xhr.send();

document.querySelectorAll(".userDiv").forEach(d =>
    d.addEventListener("click", e => {
        document.getElementById("nameTd").innerText = users.find(u => u.name == e.target.innerText).name;
        document.getElementById("userNameTd").innerText = users.find(u => u.name == e.target.innerText).username;
        document.getElementById("addressTd").innerText = users.find(u => u.name == e.target.innerText).address.city;
        document.getElementById("eMailTd").innerText = users.find(u => u.name == e.target.innerText).email;
        document.getElementById("phoneTd").innerText = users.find(u => u.name == e.target.innerText).phone;
        document.getElementById("websiteTd").innerText = users.find(u => u.name == e.target.innerText).website;
        document.getElementById("postsDiv").innerText = "";
    }));

document.getElementById("showPostsButton").addEventListener("click", e => {
    if (document.getElementById("nameTd").innerText != "") {
        const postsRequest = new XMLHttpRequest();
        //Пример GET-запроса с параметром
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