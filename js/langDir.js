let getLang = localStorage.getItem('langDir');
if(getLang){
    if(getLang == 'rtl'){
        changeDir('rtl');
    } else{
        changeDir('ltr');
    }
}


let en_language = document.getElementById('en');
let ar_language = document.getElementById('ar');

en_language.addEventListener('click',()  => changeDir('ltr'));
ar_language.addEventListener('click',() => changeDir('rtl'));


function changeDir(dir){
    document.documentElement.setAttribute('dir',dir) ; 
    localStorage.setItem('langDir',dir); 
}