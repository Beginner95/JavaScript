'use strict';

let makeBuffer = function() {
    let txt = '';
    
    let buffer = function(str) {
        if (arguments.length == 0) {
            return txt;
        }
        txt += str;
    };
    
    buffer.clear = function() {
        txt = '';
    }
    return buffer;
};

let buffer = makeBuffer();
buffer(0.5);
buffer('test');
buffer(5);
console.log(buffer());
buffer.clear();
console.log(buffer());

