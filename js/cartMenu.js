let carts_Products_Content_Dom = document.querySelector(".carts-products div"); 
let badgeDom = document.querySelector(".badge");
let shop_cart = document.querySelector(".shop-cart");
let carts_Products_Dom = document.querySelector(".carts-products");

 
// Check if there is item in local storrage
let addedItem = localStorage.getItem("productsInCart")
? JSON.parse(localStorage.getItem("productsInCart"))
: [];
if(addedItem){
    addedItem.forEach((item) => {
        carts_Products_Content_Dom.innerHTML += ` <p>${item.title} <span class="item-nbr">${item.nbr}</span></p>`;
    })
    let cartProducts_length = document.querySelectorAll(".carts-products div p");
    badgeDom.style.display = "block";
    badgeDom.innerHTML = cartProducts_length.length;
}

// Open Cart Menu
shop_cart.addEventListener("click",() => {
    if(carts_Products_Dom.style.display === "none"){
        carts_Products_Dom.style.display = "block";
    }else{
        carts_Products_Dom.style.display = "none";
    }  
})