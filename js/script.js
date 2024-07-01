

//define products

let productsDom = document.querySelector('.products');
let badge = document.querySelector('.badge'); 
let cartsProduct = document.querySelector('.carts-products div');
let cartsProductMenu = document.querySelector('.carts-products');
let numOfProducts = localStorage.getItem('numofproducts') ? parseInt(localStorage.getItem('numofproducts')) : 0 ; 
let shoppingCart = document.querySelector('.shoppingCart');


if(localStorage.getItem('numofproducts')){
    badge.innerHTML = localStorage.getItem('numofproducts')  ; 
}

if (localStorage.getItem('productincart')){
    let productInCart = JSON.parse(localStorage.getItem('productincart'));
    productInCart.map((item) => {
        cartsProduct.innerHTML += `<p>${item.title} (${item.qty})</p>` ;
    })
}


let Products;
if(localStorage.getItem('products')){
     Products = JSON.parse(localStorage.getItem('products')); 
} else{
     Products = [
        {
            id:1,
            title:'headphone item',
            size:'large',
            imageUrl:'images/pexels-arts-1152707.jpg',
            qty:0,
            isMe:'N',
    
        },
        {
            id:2,
            title:'laptop item',
            size:'large',
            imageUrl:'images/pexels-pixabay-15239.jpg',
            qty:0,
            isMe:'N',
    
        },
        {
            id:3,
            title:'watch item',
            size:'large',
            imageUrl:'images/pexels-lstan-1751542.jpg',
            qty:0,
            isMe:'N',
    
        },
    
    ];
    
    localStorage.setItem('products',JSON.stringify(Products));
};




// add products to html
function putProducts(pro){
    let productUI = pro.map((item) => {
        return `
        <div class="product-item" style="border :${item.isMe == 'Y' ? '1px solid green' : ''} ">
        <img src="${item.imageUrl}" alt="image">
        <div class="content">
            <h2>${item.title}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisic</p>
            <span>Size: ${item.size}</span>

            ${item.isMe === 'Y' ? "<button class = 'edit-product' onclick = 'editProduct("+item.id+")'> Edit Product </button>" : "" }
        </div>
        <div class="product-item-actions">
            <button class="add-to-cart"  onclick= "addedToCart(${item.id})">Add to cart</button>
            <i class="fa-regular fa-heart favorite" id=${item.id} onclick ="favortieProduct(${item.id})"></i>
        </div>
        </div>
        `
    })

    productsDom.innerHTML = productUI.join(""); 
    
}

putProducts(Products); 


shoppingCart.addEventListener('click',openCartMenu);

// check items in localStorage
let addedItem = localStorage.getItem('productincart') ? JSON.parse(localStorage.getItem('productincart')): [];

function addedToCart(id){
    let getChecked = false;
    if(localStorage.getItem('username')){
        if(localStorage.getItem('productincart')){
            let checkProducts = JSON.parse(localStorage.getItem('productincart'));
           
            checkProducts.map((checkItem) =>{
                if(checkItem.id == id){
                    getChecked = true;
                }
            });
            if(getChecked == true){
                cartsProduct.innerHTML = "" ;
                addedItem.map((item) =>{
                    if(item.id === id){
                        item.qty += 1 ;
                    } 
                    cartsProduct.innerHTML += `<p>${item.title} (${item.qty})</p>` ;
                });
                console.log(checkProducts);  
                localStorage.setItem('productincart',JSON.stringify(addedItem)); 
            }
            
        }
        if(getChecked == false){
            numOfProducts += 1 ;
            localStorage.setItem('numofproducts',numOfProducts);
            let chosenItem = Products.find((item) => item.id === id);
            chosenItem.qty +=1 ; 
            cartsProduct.innerHTML += `<p>${chosenItem.title}</p>` ;
            badge.innerHTML = numOfProducts ; 
            addedItem.push(chosenItem) ;
            localStorage.setItem('productincart',JSON.stringify(addedItem));
        };
      
    } else{
        window.location = 'login.html' ;
 
    }
  
}

// open cart
function openCartMenu(){
    if(cartsProduct.innerHTML !== ''){
        cartsProductMenu.classList.toggle("active");
    }
   
}


// search function

let inputSearch = document.getElementById('search');

inputSearch.addEventListener('keyup',function(e){

        search(e.target.value, JSON.parse(localStorage.getItem('productincart')));
        if(e.target.value.trim() == ""){
            putProducts(Products);
        }
    
})


function search(title,myArray){
    let arr=  myArray.find((item)=> item.title.indexOf(title) !== -1); 
    if(arr){
        productsDom.innerHTML = ` 
        <div class="product-item">
        <img src="${arr.imageUrl}" alt="image">
        <div class="content">
            <h2>${arr.title}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisic</p>
            <span>Size: ${arr.size}</span>
        </div>
        <div class="product-item-actions">
            <button class="add-to-cart"  onclick= "addedToCart(${arr.id})">Add to cart</button>
            <i class="fa-regular fa-heart"></i>
        </div>
        </div>
        `
    }
   

}



let favoriteProductList = document.querySelectorAll('.favorite');
let favoriteList = localStorage.getItem('favoritelist') ? JSON.parse(localStorage.getItem('favoritelist')) : [] ; 



function favortieProduct(id){
    let itemExist = false ; 
    favoriteProductList.forEach((item) => {
        if(item.id == id){     
            let getFavProduct = localStorage.getItem('productincart') ?  JSON.parse(localStorage.getItem('productincart')) : [];
            let checkProduct =getFavProduct.find((ch) => ch.id == Products[id-1].id);
            if(checkProduct == null){
                alert('this Product not in the card!');
                return;
            }
            if(getFavProduct == false){
                alert('you should add product to the cart first!')
            } else{
                getFavProduct.map((element) => {
                    if(element.id == id){
                        if(favoriteList != false){
                            favoriteList.forEach((i) => {
                                if(i.id == id){
                                    item.style.color = 'black' ;
                                    favoriteList.splice(favoriteList.indexOf(i),1);      
                                    itemExist = true ; 
                                                        
                                }  
                                
                            })
                        }
                        
                        if(itemExist == false) {
                            favoriteList.push(element) ;
                            item.style.color = 'red' ;  
                        }
                    
                    } 
                   
                })
                
                
                localStorage.setItem('favoritelist', JSON.stringify(favoriteList)) ; 
            }
            
        
            
        
        }
    })
};

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


// filter the size

let sizeFilter = document.getElementById('size-filter');

sizeFilter.addEventListener('change',getProductsfilteredbySize);

function getProductsfilteredbySize(){
    let val = this.value;
    console.log(val);
    if(val == 'all'){
        putProducts(Products); 
    }else{
        let products = Products.filter((i) => i.size == val);
        putProducts(products);
    }
    if(val == ''){
        putProducts(Products); 
    }


}

// Edit Product

function editProduct(id){
    localStorage.setItem('edit-id',id);
    window.location = 'editProduct.html';
}



