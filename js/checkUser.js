let userInfo = document.querySelector("#user-info");
let userDom = document.querySelector("#user");
let links = document.querySelector("#links");
let logout = document.querySelector("#log-out");

let username = localStorage.getItem("username")

if(username){
    links.remove();
    userInfo.style.display = "flex";
    userDom.innerHTML = username;
}

logout.addEventListener("click",logOut);

function logOut(){
    localStorage.clear();
    setTimeout(() => {
        window.location = "register.html";
    }, 1500);
}