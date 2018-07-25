'use strict';
let sliderElem = document.getElementById('slider');
let thumbElem = sliderElem.children[0];

thumbElem.onmousedown = function(e) {
    
    let thumbCoords = getCoords(thumbElem);
    let shiftX = e.pageX - thumbCoords.left;
    let sliderCoords = getCoords(sliderElem);

    document.onmousemove = function(e) {
        let newLeft = e.pageX - shiftX - sliderCoords.left;
        
        if (newLeft < 0) {
            newLeft = 0;
        }
        
        let rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;
        
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }
        
        thumbElem.style.left = newLeft + 'px';
    }
    
    document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
    };
    return false;
};

thumbElem.ondragstart = function() {
    return false;
}

function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    }
}