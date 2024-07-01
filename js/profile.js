// get gata from LocalStorage.
let username = localStorage.getItem('username'); 
let email = localStorage.getItem('email'); 
let products = JSON.parse(localStorage.getItem('products'));
let myProducts = products.filter((i) => i.isMe == 'Y');

//Variables
let userProfile = document.getElementById('username');
let userEmail = document.getElementById('email');
let productsLength = document.querySelector('#productsLength span');
let userProfileImage = document.querySelector('.user-profile');
let getImage = localStorage.getItem('profileImage') ; 



userProfile.innerHTML = username;
userEmail.innerHTML = email;
if(productsLength ==0 ){
    productsLength.remove()
} else{
    productsLength.innerHTML = myProducts.length;
}


if(getImage){
    userProfileImage.src = getImage ; 
}

