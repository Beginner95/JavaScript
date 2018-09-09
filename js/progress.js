'use strict';

function myProgress(time) {
    let start = 0;
    let timer = Math.round(time * 10);
    let progressElem = document.getElementById('my-progress');
    let statusProgress = document.getElementById('status-progress');
    let intervalId = setInterval(function(){
        
        if (start > 100) {
            clearInterval(intervalId);
            alert('Прогресс загрузки заверщен!');
        } else {
            progressElem.value = start;
            statusProgress.innerHTML = start + '%';
        }
        
        start++;
        
    }, timer);
}

myProgress(2);