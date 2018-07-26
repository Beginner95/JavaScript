'use strict';

let addOnWheel = function(elem, handler) {
    if (elem.addEventListener) {
        if('onwheel' in document) {
            elem.addEventListener('wheel', handler);
        } else if ('onmousewheel' in document) {
            elem.addEventListener('mousewheel', handler);
        } else {
            elem.addEventListener('MozMousePixelScroll', handler);
        }
    } else {
        txt.attachEvent('onmousewheel', handler);
    }
}

let scale = 1;

addOnWheel(txt, function(e) {
    let delta = e.deltaY || e.detail || e.wheelDelta;
    
    if (delta > 0 ) {
        scale += 0.05;
    } else {
        scale -= 0.05;
    }
    
    txt.style.transform = txt.style.WebkitTransform = txt.style.MsTransform = 'scale(' + scale + ')';
    
    e.preventDefault();
    
});