// Variables
let products_parent = document.querySelector(".products");
let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let myProducts = products.filter(item => item.isMe === "yes");
let noProducts = document.querySelector(".no_products");
// if(!myProducts){
//     noProducts.innerHTML = "You don't have any product added"
// }

//  Display Products 
function drawMyProducstUi(products) {
    if(products.length == 0){
        products_parent.innerHTML = "";
        noProducts.innerHTML = "You don't have any product added"
    }else{
        let productsUI = products.map((item) => {
        return `
        <div class="product-item" style = "border:2px solid green">

        <img src=${item.image} alt="watch-image" class="product-item-img">

        <div class="product-item-desc">
            <a href="cartDetails.html" onclick="saveIdData(${item.id})">${(item.title)}</a>
            <p>${item.desc}</p>
            <span>Size : ${item.size}</span>
            <button class='edit-product' onclick='editProduct(${item.id})'>Edit Product</button>
            </div><!-- ./product-item-desc -->
            
            <div class="product-item-actions">
            <button class="delete-product" onclick="deleteProduct(${item.id})">Delete Product</button>
        </div><!-- ./product-item-desc -->
        </div><!-- ./product-item -->
        `
        })
        products_parent.innerHTML = productsUI.join("");
    }
};
drawMyProducstUi(myProducts);

// Edit Product
function editProduct(id){
    localStorage.setItem("editProduct",id);
    window.location = "editProduct.html"
}

// Delete Product
function deleteProduct(id){
    products = products.filter(item => item.id !== id)
    myProducts = myProducts.filter(item => item.id !== id);
    drawMyProducstUi(myProducts);
    localStorage.setItem("products",JSON.stringify(products))
}