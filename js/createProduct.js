let getProduct = JSON.parse(localStorage.getItem('products'));
let inputFile = document.querySelector('#upload-image');
let productTitle = document.querySelector('.title');
let productDesc = document.querySelector('.desc'); 
let productSizeselect = document.querySelector('#size') ;
let productCreate = document.querySelector('.create-form'); 
let productSizevalue;
let productImage;

//Events
productSizeselect.addEventListener('change',getSizevalue);
productCreate.addEventListener('submit',createProduct);
inputFile.addEventListener('change',uploadImage);

// Functions
function createProduct(e){
    e.preventDefault();
    let titleValue =productTitle.value; 
    let descValue =productDesc.value; 

    if(titleValue && descValue){
        let obj ={
            id:getProduct.length + 1,
            title:titleValue,
            imageUrl:productImage,
            qty:1,
            size:productSizevalue,
            desc:descValue,
            isMe:'Y',
        }
    
        getProduct.push(obj);
        localStorage.setItem('products',JSON.stringify(getProduct));
    
        productTitle.value = ''; 
        productDesc.value= '' ;
        productSizeselect.value = '' ; 
    } else{
        alert('Enter data'); 
    }

   

}

function getSizevalue(e){
    productSizevalue = e.target.value ;
}

//let preview;
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
    console.log(reader);
    reader.readAsDataURL(file);
    console.log(reader);

    reader.onload = function(){
        productImage = reader.result ; 

    }

    reader.onerror = function(){
        alert('!Error..')
    }

}