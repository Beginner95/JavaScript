'use strict';

let printNumbersInterval = function() {
    let i = 1;
    let timerId = setInterval(function() {
        console.log(i);
        
        if (i == 20) {
            clearInterval(timerId);
        }
        i++;
    }, 100);
};

printNumbersInterval();

