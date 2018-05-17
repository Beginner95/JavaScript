'use strict';

let makeBuffer = function() {
    let txt = '';
    
    return function(str) {
        if (arguments.length == 0) {
            return txt;
        }
        txt += str;
    }
}

let buffer = makeBuffer();
buffer(0.5);
buffer('test');
buffer(5);
console.log(buffer());

