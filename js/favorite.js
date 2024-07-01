let productCarts = localStorage.getItem('favoritelist');
let productsDom = document.querySelector('.products');
//let badge = document.querySelector('.badge'); 
//let numOfProducts = localStorage.getItem('numofproducts') ? parseInt(localStorage.getItem('numofproducts')) : 0 ; 
let noProducts = document.querySelector('.noproducts');

/*if(localStorage.getItem('numofproducts')){
    badge.innerHTML = localStorage.getItem('numofproducts')  ; 
}*/


if(productCarts){
    let items = JSON.parse(productCarts);
    favoriteProducts(items);
}


function favoriteProducts(products){
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
            <button class="add-to-cart" onclick="removeProduct(${item.id})">Remove from Favorite</button>
            <i class="fa-regular fa-heart favorite" id="${item.id}"></i>
        </div>
        </div>
        `
    })

    productsDom.innerHTML = productUI.join(""); 
    
}


function removeProduct(id){
    let count = 0
    let removedProduct = JSON.parse(localStorage.getItem('favoritelist'));
    removedProduct.map((item) =>{
        if(item.id == id){
           removedProduct.splice(count,1);
           localStorage.setItem('favoritelist',JSON.stringify(removedProduct));
           favoriteProducts(removedProduct);
       
        }
        count +=1 ;
    })
}


let favoriteProductList = document.querySelectorAll('.favorite');
console.log(favoriteProductList) ; 
let favoriteList = localStorage.getItem('favoritelist') ? JSON.parse(localStorage.getItem('favoritelist')) : [] ; 
console.log(favoriteList);

function fixingProductColor(){
    favoriteList.map((item) => {
        favoriteProductList.forEach((el) => {
            if(item.id == el.id){
                el.style.color = 'red'; 
            }
        })
    })
};

fixingProductColor();