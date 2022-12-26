// define product 
let products_parent = document.querySelector(".products");
let nameDom = document.querySelector("#search");
let favDom = document.querySelector(".like")
let allproducts = productsDB;

// Display Products 
function drawProducstUi(products) {
    let productsUI = products.map((item) => {
        return `
        <div class="product-item" style = "border: ${item.isMe === "yes" ? "2px solid green" : ""}">

        <img src=${item.image} alt="watch-image" class="product-item-img">

        <div class="product-item-desc">
            <a href="cartDetails.html" onclick="saveIdData(${item.id})">${(item.title)}</a>
            <p>${item.desc}</p>
            <span>Size : ${item.size}</span>
            ${
                item.isMe === "yes" ?
                "<button class='edit-product' onclick='editProduct("+item.id+")'>Edit Product</button>" : ""
            }

        </div><!-- ./product-item-desc -->

        <div class="product-item-actions">
            <button class="add-to-cart" onclick="addedToCart(${item.id})">Add to cart</button>
            <i class="fa-regular fa-heart add-to-favorite" style= "color: ${item.liked == true ? "red" : "" }" onclick="addToFavorit(${item.id})"></i>
        </div><!-- ./product-item-desc -->
        </div><!-- ./product-item -->
        `
    })
        products_parent.innerHTML = productsUI.join("");
};
drawProducstUi(JSON.parse(localStorage.getItem("products")) || allproducts);
// Add To Cart

function addedToCart(id){
    if(localStorage.getItem('username')){
        let products = JSON.parse(localStorage.getItem("products")) || allproducts
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

//saveIdData
function saveIdData(id){
    localStorage.setItem("id",id);
}
//search By Name
nameDom.addEventListener("keyup",searchByName);
function searchByName(e){
    search(e.target.value,allproducts)
}
function search(title,myArray){
    let filtered = myArray.filter(item => item.title.toLowerCase().indexOf(title.toLowerCase()) != -1);
    if(filtered.length == 0){
        products_parent.innerHTML = `<p> There is not a product with this name </p>`  
    }else{
        products_parent.innerHTML ="";
        drawProducstUi(filtered);
    }
}
/////// Add To Favorit
let favorite_products = localStorage.getItem("productsfavorite")
? JSON.parse(localStorage.getItem("productsfavorite"))
: [];
    let products = localStorage.getItem("products") ?
    JSON.parse(localStorage.getItem("products"))
    : productsDB;
function addToFavorit(id){
    if(localStorage.getItem("username")){
        let choosenItem = products.find((item) => item.id === id);
        choosenItem.liked = true;
        let there_is = favorite_products.find((item) => item.id == choosenItem.id);
            if(there_is){
               favorite_products.splice(favorite_products.indexOf(there_is),1);
               localStorage.setItem("productsfavorite",JSON.stringify(favorite_products))
            }else{
                favorite_products = [...favorite_products,choosenItem]
                localStorage.setItem("productsfavorite",JSON.stringify(favorite_products));
            }
        let productsfavorite = JSON.parse(localStorage.getItem("productsfavorite"));
        products.map(item => item.liked = false);
        products.map(item => {
            productsfavorite.map(i => {
               if(i.id == item.id){
                item.liked = true;
               } 
            })
        })
        localStorage.setItem("products",JSON.stringify(products));
        drawProducstUi(JSON.parse(localStorage.getItem("products")))
        let favcount = JSON.parse(localStorage.getItem("productsfavorite"));
        favDom.innerHTML = favcount.length;
    }else{
        window.location = "login.html";
    }
}

// Filter By Size
let sizeFilter = document.getElementById("filter-size");
sizeFilter.addEventListener("change",getProductsFilteredBySize)

function getProductsFilteredBySize(e){
    
    let products = JSON.parse(localStorage.getItem('products')) || allproducts;

    if(e.target.value === "all"){
        drawProducstUi(products);
    }else{
        let productsFilter = products.filter(item => item.size === e.target.value);
        drawProducstUi(productsFilter)
    }
   
}

// Edit Product
function editProduct(id){
    localStorage.setItem("editProduct",id);
    window.location = "editProduct.html"
}


// Set in local Storage the img of the user
localStorage.setItem("userImage","images/user-avatar-1.png");
