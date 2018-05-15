'use strict';

let randomInteger = function(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);   
}

alert( randomInteger(2, 8) );