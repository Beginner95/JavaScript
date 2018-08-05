'use strict';

function replaceImg() {
    let divs = document.querySelectorAll('div.img-replace');
    
    for (let i = 0; i < divs.length; i++)(function(i) {
        let img = document.createElement('img');
        img.src = divs[i].getAttribute('data-src');
        img.className = 'img-replace';
        
        img.onload = function() {
            divs[i].parentNode.replaceChild(img, divs[i]);
        }
    }(i))
}

setTimeout(replaceImg, 3000);

function c(str) {
    console.log(str);
}