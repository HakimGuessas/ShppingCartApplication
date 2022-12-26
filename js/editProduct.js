let productName = document.querySelector("#product-name");
let productdesc = document.querySelector("#product-desc");
let productSizeSelect = document.querySelector("#size");
let updateForm = document.querySelector(".update-form");
let inputFile = document.querySelector("#upload-image-file");
let productSizeValue;
let productImage;
let deleteProduct = document.querySelector(".delete-product")


let products = JSON.parse(localStorage.getItem("products"));
let getProduct = products.find(item => item.id == localStorage.getItem("editProduct"))

productName.value = getProduct.title;
productdesc.value = getProduct.desc;
productSizeSelect.value = getProduct.size;
productImage = getProduct.image;
productSizeValue = size.value;

// Events
productSizeSelect.addEventListener("change",getProductSizeValue);
updateForm.addEventListener("submit",updateProduct)
inputFile.addEventListener("change",uploadImage);


// Get Size of Prouduct edited
function getProductSizeValue(e){
    productSizeValue = e.target.value;
}

// Update Product

function updateProduct(e){
    e.preventDefault();
    
    getProduct.title = productName.value;
    getProduct.desc = productdesc.value;
    getProduct.size = productSizeValue;
    getProduct.image = productImage;
    localStorage.setItem("products", JSON.stringify(products))
    setTimeout(() => {
        window.location = "index.html"
    }, 500);
}

/// Uploat Image Of Product
function uploadImage(){
    let file = this.files[0];
    let  types = ['image/jpg','image/png'];
    if(types.indexOf(file.type) == 1){
        alert("the type of image is not supported")
        return;
    }
    if(file.size > 2*1024*1024){
        alert("the size of image is greater than 2MG");
        return;
    }
    getImageBase64(file)
}

function getImageBase64(file){
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(){
        productImage = reader.result;
    }
    reader.onerror = function(){
        alert("Error !!")
    }
}