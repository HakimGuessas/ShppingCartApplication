let contentDom = document.querySelector(".home .container div");
let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let myProducts = products.filter(item => item.isMe === "yes");

function cartDetails(id){
    let choosenItem = products.find((item) => item.id == id);
    contentDom.innerHTML = `
    <div class="product-item">
        <img src=${choosenItem.image} alt="watch-image" class="product-item-img">

        <div class="product-item-desc">
            <a href="cartDetails.html" onclick="cartDetails(${choosenItem.id})">${choosenItem.title}</a>
            <p>${choosenItem.desc}</p>
            <span>Size : ${choosenItem.size}</span><br/>
            <span>Quantity : ${choosenItem.nbr}</span>
        </div><!-- ./product-item-desc -->

        <div class="product-item-actions">
            <button class="add-to-cart"  style = "display: ${choosenItem.isMe === "yes" ? "block" : "none"}" onclick = "editProduct(${choosenItem.id})" ">Edit Product</button>
            <button class="add-to-cart" onclick="addedToCart(${choosenItem.id})">Add to cart</button>
            <i class="fa-regular fa-heart add-to-favorite"></i>
        </div><!-- ./product-item-desc -->
        </div><!-- ./product-item -->
    `
}
cartDetails(localStorage.getItem("id"));

// Edit Product
function editProduct(id){
    localStorage.setItem("editProduct",id);
    window.location = "editProduct.html"
}

// Save My Views
let allViews = localStorage.getItem("myViews")
? JSON.parse(localStorage.getItem("myViews"))
: [];


let myView = products.find(item => item.id == localStorage.getItem("id"));
let isProductThere = allViews.find(item => item.id == myView.id);
console.log(isProductThere)
if(isProductThere){
    
}else{
    allViews = [...allViews,myView];
}
localStorage.setItem("myViews",JSON.stringify(allViews))

// Add To Cart

function addedToCart(id){
    if(localStorage.getItem('username')){
        let product = products.find((item) => item.id === id);
        let isProductInCart = addedItem.find(i => i.id == product.id);
        if(isProductInCart){
            addedItem = addedItem.map( p => {
                if(p.id === product.id){
                    p.nbr += 1;
                    return p;
                }else{
                    return p;
                }
            })
        }else{
            addedItem.push(product);
        }
        // UI 
        carts_Products_Content_Dom.innerHTML = "";
        addedItem.forEach((item) =>{
            carts_Products_Content_Dom.innerHTML += `<p>${item.title} <span class="item-nbr">${item.nbr}</span></p>`;
        });
        // Save Data in Local Storage
        localStorage.setItem("productsInCart",JSON.stringify(addedItem));
        // Counter
        let cartProducts_length = document.querySelectorAll(".carts-products div p");
        badgeDom.innerHTML = cartProducts_length.length;
    } else{
        window.location = "login.html";
    }
}