let favDom = document.querySelector(".like")
let productName = document.querySelector("#product-name");
let productdesc = document.querySelector("#product-desc");
let productSizeSelect = document.querySelector("#size");
let inputFile = document.querySelector("#upload-image-file");
let createForm = document.querySelector(".create-form");
let productSizeValue;
let productImage;


// Show Count of Favorite
let productfavorite = localStorage.getItem("productsfavorite") 
? JSON.parse(localStorage.getItem("productsfavorite"))
: [];
if(productfavorite){
    favDom.innerHTML = productfavorite.length;
}

                                        // Add Product To Local Storage

// get the value of size selected
productSizeSelect.addEventListener("change",getProductSizeValue);
function getProductSizeValue(e){
    productSizeValue = e.target.value;
}

// add event to create product btn
createForm.addEventListener("submit",createProductFun);

function createProductFun(e){
    e.preventDefault();
    let allproducts = JSON.parse(localStorage.getItem("products"))
    let nameValue = productName.value;
    let descValue = productdesc.value ;
    if(nameValue && descValue && productSizeValue){
    let obj = {
        id: allproducts ? allproducts.length+1 :productsDB.length + 1,
        title : nameValue,
        image: productImage,
        desc : descValue,
        nbr: 1,
        size : productSizeValue,
        isMe: "yes"
    };
    let newProducts = allproducts ? [...allproducts,obj] : [...productsDB,obj];
    localStorage.setItem("products",JSON.stringify(newProducts))
    productName.value = "";
    productdesc.value = "";
    productSizeSelect.value = "";
    setTimeout(() => {
        window.location = "index.html";
    }, 500);
    }
}
/// Uploat Image Of Product
inputFile.addEventListener("change",uploadImage);

function uploadImage(){
    let file = this.files[0];
    // let  types = ["image/jpg","image/png"];
    // if(types.indexOf(file.type) == -1){
    //     alert("the type of image is not supported")
    // }
    if(file.size > 2*1024*1024){
        alert("the size of image is greater than 2MG");
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