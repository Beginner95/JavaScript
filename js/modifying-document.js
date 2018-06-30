'use strict';

let removeChildren = function(elem) {
    while (elem.lastChild) {
        elem.removeChild(elem.lastChild);
    }
}

removeChildren(table);

removeChildren(ol);