'use strict';

let sum = function(a) {
    
    return function(b) {
        return a + b;
    }
    
}

alert( sum(4)(2) );