'use strict';

let sum = function(a) {
    
    let currentSum = a;
    
    let f = function(b) {
        currentSum += b;
        return f;
    }
    
    f.toString = function() {
        return currentSum;
    };
    
    return f;
}

alert( sum(0)(1)(2)(3)(4)(5) );