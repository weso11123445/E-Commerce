let Username = document.querySelector('.username'),
Email = document.querySelector('.email'),
Password = document.querySelector('.password'),
Signup = document.querySelector('.signup') ;


Signup.addEventListener('click',function(e){
    e.preventDefault();
    if(Username.value === "" || Email.value === "" || Password.value === ""){
        alert('please fill data'); 
    }
    else{
        localStorage.setItem('username',Username.value);
        localStorage.setItem('email',Email.value);
        localStorage.setItem('password',Password.value);

    }

   

    setTimeout(() => {
        window.location = 'login.html' ; 
    }, 1500);

    console.log(localStorage.getItem('username')) ;

   
})