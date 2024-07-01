let products = JSON.parse(localStorage.getItem('products'));
let id = localStorage.getItem('edit-id');
let productTitle = document.querySelector('.title');
let productDesc = document.querySelector('.desc'); 
let productSizeselect = document.querySelector('#size') ;
let productUpdate = document.querySelector('.update-form');
let inputFile = document.querySelector('#upload-image');
let getProduct = products.find((item) => item.id == id);
let productImage;  
let val;


productTitle.value = getProduct.title;
productDesc.value = getProduct.desc;
productSizeselect.value = getProduct.size; 
productImage = getProduct.imageUrl;


//Events
productSizeselect.addEventListener('change',getSize);
productUpdate.addEventListener('submit',updateProduct);
inputFile.addEventListener('change',uploadImage);




//functions

function getSize(){
    val = this.value;
}


function updateProduct(e){
    e.preventDefault(); 
    if(!productTitle.value == '' && !productDesc.value ==''){
        let productsUpdating = products.map((item)=>{
            if(item.id == id){
                item.title = productTitle.value;
                item.desc = productDesc.value; 
                item.size = val ;
                item.imageUrl = productImage;
                return item;  
            } else{
                return item ; 
            }
        })
        localStorage.setItem('products',JSON.stringify(productsUpdating));
        productTitle.value = ''; 
        productDesc.value = '';
        productSizeselect.value = '' ; 
        setTimeout(() => {
          window.location = 'index.html';  
        }, 1000);
    }
    else{
        alert('please Enter the Data');
    }

    
}


function uploadImage(){
    let file = this.files[0]
    getImagebase64(file) ; 
    let types= ['image/jpeg', 'image/png' ]
    if(types.indexOf(file.type) == -1){
        alert('Type not supported');
        return;
    }

    if(file.size > 2* 1024 * 1024){
        alert('image not exceed two mega');
        return ; 
    }

    //productImage = URL.createObjectURL(file);
    //console.log(productImage); 

}

function getImagebase64(file){
    let reader = new FileReader() ; 
    reader.readAsDataURL(file);

    reader.onload = function(){
        productImage = reader.result ; 

    }

    reader.onerror = function(){
        alert('!Error..')
    }

}




