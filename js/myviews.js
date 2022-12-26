// Dom
let products_parent = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProduct");
// Display Products 
function drawMyViewstUi(products) {
    if(products.length == 0){
        noProductsDom.innerHTML = "you didn't see any Product yes !";
    }
    let productsUI = products.map((item) => {
        return `
        <div class="product-item" style = "border: ${item.isMe === "yes" ? "2px solid green" : ""}">

        <img src=${item.image} alt="watch-image" class="product-item-img">

        <div class="product-item-desc">
            <a href="cartDetails.html" onclick="saveIdData(${item.id})">${(item.title)}</a>
            <p>${item.desc}</p>
            <span>Size : ${item.size}</span>
            <button class="remove-form-views" onclick="removeFromMyViews(${(item.id)})">Remove From Views</button>
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
drawMyViewstUi(JSON.parse(localStorage.getItem("myViews")) || []);

// Remove From My Views
function removeFromMyViews(id){
    let allViews = JSON.parse(localStorage.getItem("myViews"));
    let newViews = allViews.filter(item => item.id !== id);
    localStorage.setItem("myViews",JSON.stringify(newViews));
    drawMyViewstUi(newViews);
}