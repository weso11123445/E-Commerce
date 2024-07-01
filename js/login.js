let Username = document.querySelector('.username'),
Password = document.querySelector('.password'),
siginin = document.querySelector('.signin');


let getUser = localStorage.getItem('username');
let getPassword= localStorage.getItem('password');



siginin.addEventListener('click', function(e){
    e.preventDefault(); 
    if(Username.value === ""  || Password.value === ""){
        alert('please fill data'); 
    }
    else{
        if(Username.value == getUser && Password.value == getPassword){
            setTimeout(() =>{
                window.location = 'index.html' ; 
            } ,1500)
            
        }
        else{
            alert('username or password is wrong.');
        }
    }

   
})