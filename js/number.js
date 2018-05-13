'use strict';

let getDecimal = function(a) {
    a = a % 1;
    if (a < 0) {
        a = +(a * (-1)).toFixed(2);
    }
    return a;
}

alert(getDecimal(-55.56565655));