'use strict';

let getDecimal = function(a) {
   return +(a % 1).toFixed(2);
}

alert(getDecimal(-55.56565655));