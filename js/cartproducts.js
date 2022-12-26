let products_parent = document.querySelector(".products");
let no_products = document.querySelector(".no_products");
let allproducts = JSON.parse(localStorage.getItem("products"));


// Display The Products That Added To Cart 
function drawCartProductsUI(allproducts = []){  
    let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
    if(productsInCart.length === 0){
        no_products.innerHTML = `<p> There is no Product !! </p>`;
    }
        let products = productsInCart || allproducts;
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
                <button class="add-to-cart" onclick="removeProduct(${item.id})">Remove From cart</button>
            </div><!-- ./product-item-desc -->
            </div><!-- ./product-item -->
            `
        })
        products_parent.innerHTML += productsUI.join("");
}
drawCartProductsUI();

//Remove Products From Cart
function removeProduct(id){
    let productsInCart = localStorage.getItem("productsInCart");
    if(productsInCart){
        let items = JSON.parse(localStorage.getItem("productsInCart"));
        let filteredItems = items.filter((item) => item.id !== id);
        localStorage.setItem("productsInCart",JSON.stringify(filteredItems));
        products_parent.innerHTML = "";
        drawCartProductsUI();
        carts_Products_Content_Dom.innerHTML = "";
        filteredItems.forEach((item) => {
            carts_Products_Content_Dom.innerHTML += `<p>${item.title}${item.nbr}</p>`;
        })
        let cartProducts_length = document.querySelectorAll(".carts-products div p");
        badgeDom.innerHTML = cartProducts_length.length;
    }
}