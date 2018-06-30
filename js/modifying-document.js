'use strict';

let elem = document.createElement('div');

elem.innerHTML = '<b>New element</b>';

let insertAfter = function(elem, refElem) {
    /*let parent  = refElem.parentNode;
    let next = refElem.nextSibling;
    
    if (next) {
        return parent.insertBefore(elem, next);
    } else {
        return parent.appendChild(elem);
    }*/
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

let body = document.body;

insertAfter(elem, body.firstChild);

insertAfter(elem, body.lastChild);
