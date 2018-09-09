//'use strict';

function myProgress(time) {
    
    let start = 0;
    let time = Math.round(time * 10);
    let progressElem = document.getElementById('my-progress');
    
    let intervalId = setTimeout(function(){

        if (start > 100) {
            clearInterval(intervalId);
        } else {
            progressElem.value = start;
        }
        
        start++;
    }, time);
}

myProgress(4);