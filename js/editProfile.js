// Vaiables 
let inputFile = document.querySelector("#upload-image-file");
let newName = document.querySelector("#change-name");
let newEmail = document.querySelector("#change-email");
let editForm = document.querySelector(".edit-profile-form");
let productImage;

// Variables from LocalStorage
let oldname = localStorage.getItem("username");
let oldemail = localStorage.getItem("email");
// put the old data in thier places
newName.value = oldname;
newEmail.value = oldemail;

editForm.addEventListener("submit",editProfileData);
function editProfileData(e){
    e.preventDefault();
    localStorage.setItem("username",newName.value);
    localStorage.setItem("email",newEmail.value);
    localStorage.setItem("userImage",productImage);
    setTimeout(() => {
        window.location = "profile.html";
    }, 500);
}
/// Upload Image Of Product
inputFile.addEventListener("change",uploadImage);
function uploadImage(){
    let file = this.files[0];
    // let  types = ['image/jpg','image/png'];
    // if(types.indexOf(file.type) == -1){
    //     alert("the type of image is not supported")
    //     return;
    // }
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