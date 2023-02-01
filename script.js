let img1=document.getElementById('img1');
let img2=document.getElementById('img2');
let img3=document.getElementById('img3');
let img4=document.getElementById('img4');

img1.addEventListener('click', register)

function register(e) {
e.preventDefault();

window.location.href="/index1.html";

}


img2.addEventListener('click', storedata)

function storedata(e) {
    e.preventDefault();

window.location.href="/index2.html";
}

img3.addEventListener('click', game)

function game(e){
    e.preventDefault();
    
window.location.href="/index3.html";

}

img4.addEventListener('click', coupne)

function coupne(e){
    e.preventDefault();
    
window.location.href="/index4.html";

}