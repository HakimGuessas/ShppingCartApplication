let user_name = document.getElementById("user-name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("sign_up");

submit.addEventListener("click",register);
function register(e){
    e.preventDefault();
    if(user_name.value === "" || email.value === "" | password.value === ""){
        alert("Plese enter your data");
    }else{
        localStorage.setItem("username",user_name.value);
        localStorage.setItem("email",email.value);
        localStorage.setItem("password",password.value);
        user_name.value = "";
        email.value = "";
        password.value = "";
        setTimeout(() => {
            window.location = "login.html";
        },1500)
    }
}
