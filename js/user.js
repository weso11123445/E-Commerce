let userInfo = document.querySelector('.user-info');
let user = document.querySelector('.user');
let links = document.querySelector('.links');
let logout = document.querySelector('.logout');



if(localStorage.getItem('username')){
    links.remove(); 
    userInfo.style.display = 'flex',
    user.innerHTML = `${localStorage.getItem('username')}`;

}

logout.addEventListener('click',() =>{
    localStorage.clear();
    setTimeout(() => {
        window.location = 'register.html';
    },1500) 
})
