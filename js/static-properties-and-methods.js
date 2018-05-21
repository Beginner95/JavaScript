'use strict';

let sum = function() {
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
};

alert( sum(5, 5, 6) );