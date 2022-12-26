let products_parent = document.querySelector(".products");
let no_products = document.querySelector(".no_products");
let allproducts = JSON.parse(localStorage.getItem("products"));

// Display The Products That Added To Cart 
function drawFavoriteProductsUI(allproducts = []){  
    let favorite_products = JSON.parse(localStorage.getItem("productsfavorite"));
    if(favorite_products.length === 0){
        no_products.innerHTML = `<p> There is no favorite Product !! </p>`;
    }
        let products = favorite_products || allproducts;
        let productsUI = products.map((item) => {
            return `
            <div class="product-item">
            <img src=${item.image} alt="watch-image" class="product-item-img">

            <div class="product-item-desc">
                <h2>${item.title}</h2>
                <p>${item.desc}</p>
                <span>Size : ${item.size}</span><br/>
                <span> Quantanty : ${item.nbr}</span>
            </div><!-- ./product-item-desc -->

            <div class="product-item-actions">
                <button class="add-to-cart" onclick="removeFavorite(${item.id})">Remove From Favorite</button>
            </div><!-- ./product-item-desc -->
            </div><!-- ./product-item -->
            `
        })
        products_parent.innerHTML = productsUI.join("");
}
drawFavoriteProductsUI();

//Remove Products From Cart
function removeFavorite(id){
    let productsfavorite = localStorage.getItem("productsfavorite");
    if(productsfavorite){
        let items = JSON.parse(productsfavorite);
        let filteredItems = items.filter((item) => item.id !== id);
        localStorage.setItem("productsfavorite",JSON.stringify(filteredItems));
        allproducts.map(item => {
            if(item.id == id){
                item.liked = false;
            }
        })
        localStorage.setItem("products",JSON.stringify(allproducts));
        products_parent.innerHTML = "";
        drawFavoriteProductsUI(filteredItems);
    }
}