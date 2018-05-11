'use strict';

function sumTo(n) {
    if (n == 1) {
        return n;
    }
    return n + sumTo( n - 1 );
}

alert(sumTo(3));