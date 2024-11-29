const API_BASE = "https://jsonplaceholder.typicode.com";


async function fetchPosts() {
    const response = await fetch(`${API_BASE}/posts`);
    const posts = await response.json();
    displayData(posts);
}


async function fetchUsers() {
    const response = await fetch(`${API_BASE}/users`);
    const users = await response.json();
    displayData(users);
}


async function fetchComments() {
    const response = await fetch(`${API_BASE}/comments`);
    const comments = await response.json();
    displayData(comments);
}


function displayData(data) {
    const dataContainer = document.getElementById("dataContainer");
    dataContainer.innerHTML = ""; 

  
    if (Array.isArray(data) && data.length > 0) {
       
        if (data[0].hasOwnProperty('title')) {
            
            let table = `<table class="table"><thead><tr><th>ID</th><th>Title</th><th>Content</th></tr></thead><tbody>`;
            data.forEach(post => {
                table += `<tr>
                
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                </tr>`;
            });
            table += `</tbody></table>`;
            dataContainer.innerHTML = table;

        
        } else if (data[0].hasOwnProperty('name')) {
            let table = `<table class="table"><thead><tr><th>ID</th><th>Name</th><th>Email</th></tr></thead><tbody>`;
            data.forEach(user => {
                table += `<tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                </tr>`;
            });
            table += `</tbody></table>`;
            dataContainer.innerHTML = table;

        
        } else if (data[0].hasOwnProperty('email')) {
            let table = `<table class="table"><thead><tr><th>ID</th><th>Post ID</th><th>Name</th><th>Email</th><th>Comment</th></tr></thead><tbody>`;
            data.forEach(comment => {
                table += `<tr>
                    <td>${comment.id}</td>
                    <td>${comment.postId}</td>
                    <td>${comment.name}</td>
                    <td>${comment.email}</td>
                    <td>${comment.body}</td>
                </tr>`;
            });
            table += `</tbody></table>`;
            dataContainer.innerHTML = table;
        }
    } else {
        dataContainer.innerHTML = "<p>Нет данных для отображения.</p>";
    }
}
