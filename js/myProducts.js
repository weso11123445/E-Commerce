let products = JSON.parse(localStorage.getItem('products')); 
let productsDom = document.querySelector('.products');
let myProducts = products.filter((i) => i.isMe == 'Y');
let noProducts = document.querySelector('.noproducts');


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
            <button class="add-to-cart" onclick="editProduct(${item.id})">Edit Product</button>
            <button class="add-to-cart" onclick="deleteProduct(${item.id})">Delete Product</button>
        </div>
        </div>
        `
    })

    productsDom.innerHTML = productUI.join(""); 
    
}

putProducts(myProducts);  

function editProduct(id){
    localStorage.setItem('edit-id',id);
    window.location = 'editProduct.html';
}

function deleteProduct(id){
    let filtered = myProducts.filter((item) => item.id != id); 
    putProducts(filtered);
    let filteredProducts = products.filter((el) => el.id != id); 
    localStorage.setItem('products',JSON.stringify(filteredProducts));
}