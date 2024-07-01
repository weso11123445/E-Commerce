// get gata from LocalStorage.
let get_user = localStorage.getItem('username'); 
let get_email = localStorage.getItem('email'); 


//Variables
let userInput= document.getElementById('changeName');
let EmailInput = document.getElementById('changeEmail');
let editForm = document.getElementById('edit-profile-form');
let editProfileImage = document.querySelector('.updateProfileImage');
let ProfileImage; 

// Settings value
userInput.value = get_user;
EmailInput.value = get_email;

editForm.addEventListener('submit',editProfileData);
console.log(editProfileImage);

function editProfileData(e){
    e.preventDefault();

    localStorage.setItem('username',userInput.value);
    localStorage.setItem('email',EmailInput.value);

    if(ProfileImage){
        localStorage.setItem('profileImage',ProfileImage);
    }

    setTimeout(() => {
        window.location = 'profile.html';
    },500)
} 

editProfileImage.addEventListener('change',profileImage);



function profileImage(){
    let file = this.files[0];
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
        ProfileImage = reader.result ; 
        console.log(profileImage);
        

    }

    reader.onerror = function(){
        alert('!Error..')
    }

}