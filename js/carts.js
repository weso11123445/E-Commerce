let productCarts = localStorage.getItem('productincart');
let productsDom = document.querySelector('.products');
let badge = document.querySelector('.badge'); 
let numOfProducts = localStorage.getItem('numofproducts') ? parseInt(localStorage.getItem('numofproducts')) : 0 ; 
let noProducts = document.querySelector('.noproducts');

if(localStorage.getItem('numofproducts')){
    badge.innerHTML = localStorage.getItem('numofproducts')  ; 
}


if(productCarts){
    let items = JSON.parse(productCarts);
    putProducts(items);
}


function putProducts(products){
    if(products.length == 0){
        noProducts.innerHTML = 'there is no items here' ; 
    }
    let productUI = products.map((item) => {
        return `
        <div class="product-item">
        <img src="${item.imageUrl}" alt="image">
        <div class="content">
            <a href="cartdetails.html" onclick=storageId(${item.id})>${item.title}</a>
            <p>Lorem ipsum dolor sit, amet consectetur adipisic</p>
            <span>Size: ${item.size}</span>
            <p>Quantity: ${item.qty}</p>
        </div>
        <div class="product-item-actions">
            <button class="add-to-cart" onclick="removeProduct(${item.id})">Remove from cart</button>
            <i class="fa-regular fa-heart"></i>
        </div>
        </div>
        `
    })

    productsDom.innerHTML = productUI.join(""); 
    
}


function removeProduct(id){
    let favortieProduct = JSON.parse(localStorage.getItem('favoritelist'))
    let count = 0
    let removedProduct = JSON.parse(localStorage.getItem('productincart'));
    removedProduct.map((item) =>{
        if(item.id == id){
           removedProduct.splice(count,1);
           localStorage.setItem('productincart',JSON.stringify(removedProduct));
           numOfProducts -= 1 ;
           localStorage.setItem('numofproducts',numOfProducts);
           badge.innerHTML = localStorage.getItem('numofproducts')  ;
           putProducts(removedProduct);
           
        }
    if(favortieProduct){
        favortieProduct.map((el)=>{
            if(el.id == id){
                favortieProduct.splice(favortieProduct.indexOf(el),1)
                localStorage.setItem('favoritelist',JSON.stringify(favortieProduct));
            }
        })
    }
        count +=1 ;
    })
}

function storageId(id){
    localStorage.setItem('id',id);
}

window.onload = function(){
    localStorage.removeItem('id'); 
}