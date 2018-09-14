'use strict';

flyjet.onclick = function() {
    let ended = false;

    flyjet.addEventListener('transitionend', function() {
        if (!ended) {
            ended = true;
            cl('Готово!');
        }
    });

    flyjet.classList.add('growing');
}

function cl(obj) {
    console.log(obj);
}