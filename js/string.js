'use strict';

let ucFirst = function(str) {
    return (str) ? str[0].toUpperCase() + str.slice(1) : str;
}

alert( ucFirst('test') );