'use strict';
let elem = document.documentElement.childNodes;
console.log(elem);
if (!elem.childNodes.length) {
    alert('empty');
}