'use strict';

let elem = document.createElement('div');

elem.style.overflowY = 'scroll';
elem.style.height = '100px';
elem.style.width = '100px';
elem.style.visibility = 'hidden';

document.body.appendChild(elem);

console.log(elem.offsetWidth);
console.log(elem.clientWidth);

let scrollWidth = elem.offsetWidth - elem.clientWidth;

document.body.removeChild(elem)

console.log(scrollWidth);