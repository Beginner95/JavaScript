'use strict';

function sumTo(n) {
    
    let sum = 0;
    
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
    
}

alert(sumTo(3));