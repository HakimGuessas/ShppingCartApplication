// Get Data From Local Storage
let userName = localStorage.getItem("username");
let userEmail = localStorage.getItem("email");
let products = JSON.parse(localStorage.getItem("products")) || productsDB;

// Html Variables Dom
let userNameDom = document.getElementById("username")
let userEmailDom = document.getElementById("email")
let myProductsDom = document.querySelector("#productsLength")
let myProductslength = document.querySelector("#productsLength span")
let userimg = document.querySelector(".avatar-img");
userimg.setAttribute("src",localStorage.getItem("userImage")); 
userNameDom.innerHTML = userName;
userEmailDom.innerHTML = userEmail;

// Get Own Products
let myProducts = products.filter(item => item.isMe === "yes");
if(myProducts.length != 0){
    myProductslength.innerHTML = myProducts.length;
}else{
    myProductsDom.remove();
}