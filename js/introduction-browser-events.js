'use strict';

let btns = document.querySelectorAll('#messages-container .remove-button');

for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    
    btn.onclick = function() {
        let el = this.parentNode;
        el.parentNode.removeChild(el);
    }
}