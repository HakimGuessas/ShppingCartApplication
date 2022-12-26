let user_name = document.querySelector("#user-name");
let password = document.querySelector("#password");
let submit = document.querySelector("#sing-in");

submit.addEventListener("click",login);

function login(e){
    e.preventDefault();
    if(user_name.value == "" || password.value == ""){
        alert("Please Enter data");
    }else{
        if(localStorage.getItem("username").trim( ) === user_name.value.trim() && localStorage.getItem("password").trim() === password.value.trim()){
            setTimeout(() => {
                window.location = "index.html";
            },1500)
        }else{ 
            console.log("username or password is wrong !!");
        }
    }
}