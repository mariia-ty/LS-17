/*
let page = 1;
const limit = 5;
const postsContainer = document.getElementById("post");
const pageNum = document.getElementById("pageNum");

function loadPosts() {
  fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&+limit=${limit}`
  )
    .then((res) => res.json())
    .then((data) => {
      postsContainer.innerHTML = "";
      data.forEach((post) => {
        const div = document.createElement("div");
        div.innerHTML = `<h3> ${post.title}</h3> <p>${post.body}</p>`;
        postsContainer.appendChild(div);
      });
      pageNum.textContent = page;
    });
}

document.getElementById("prev").addEventListener("click", () => {
  if (page > 1) {
    page--;
    loadPosts();
  }
});

document.getElementById("next").addEventListener("click", () => {
  if (page < 20) {
    page++;
    loadPosts();
  }
});

loadPosts();
*/
/*
let userPage = 1; 
const userLimit = 3; 
const userContainer = document.getElementById('div'); 
document.body.appendChild(userContainer);

function loadUser() {
    fetch(
        `https://jsonplaceholder.typicode.com/users?_page=${userPage}&+limit=${userLimit}`
    )
        .then(res => res.json())
        .then(users => {
            userContainer.innerHTML = "";
            users.forEach(user => {
                const card = document.createElement('div');
                card.innerHTML = `<h4>${user.name}</h4><p>${user.info}</p>`;
                userContainer.appendChild(card);
            });
        });
}

const userPrev = document.createElement('button'); 
const userNext = document.createElement("button");

userPrev.textContent = "back"; 
userNext.textContent = "next"; 
document.body.append(userPrev, userNext);
userPrev.addEventListener("click", () => {
    if (userPage > 1) {
        userPage--; 
        loadUser();
    }
})
userNext.addEventListener("click", () => {
    userPage++;
    loadUser();
});
*/

let contentPage = 1; 
const contentLimit = 10; 

const contentInfo = document.createElement('p'); 
document.body.append(contentInfo); 

function loadContent() {
    fetch(`-----`)
        .then(res => {
            const total = res.headers.get('x-total-count'); 
            if (contentPage * contentLimit >= total) {
                contentnext.disabled = true; 
            } else {
                constentNext.disabled = false; 
            }
            return res.json(); 
        })
        .then(contents => {
            contentContainer.innerHTML = ''; 
            contents.forEach(content => {
                const block = document.createElement('div'); 
                block.innerHTML = `<strong>${content.info}</strong>`; 
                
            });
        })
}