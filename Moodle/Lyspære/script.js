// Javascript

let button = document.querySelector('.button');
let body = document.querySelector('body');

button.onclick = function(){
    body.classList.toggle('on');
}