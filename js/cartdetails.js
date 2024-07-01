let products = JSON.parse(localStorage.getItem('productincart'));
let id = localStorage.getItem('id');
let itemDeatilsDom = document.querySelector('.item-details');


let productDetails = products.find((item) => item.id == id ); 

itemDeatilsDom.innerHTML = `
<img src="./${productDetails.imageUrl}">
<h2>${productDetails.title}</h2>
<span>${productDetails.size}</span> 
<p>Quantity: ${productDetails.qty}</p><br>
<button onclick = "editProduct(${productDetails.id})">Edit product</button>
` ; 


// Edit Product
function editProduct(id){
    localStorage.setItem('edit-id',id);
    window.location = 'editProduct.html';
}