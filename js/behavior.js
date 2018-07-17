'use strict';

let show_title;

document.onmouseover = function(e) {
    let target = e.target;
    let title = target.getAttribute('data-title');
    
    if (!title) return;
    
    let titleElem = document.createElement('div');
    
    titleElem.className = 'msg-title';
    titleElem.innerHTML = title;
    
    document.body.appendChild(titleElem);
    
    let coords = target.getBoundingClientRect();
    let left = coords.left + (target.offsetWidth - titleElem.offsetWidth) / 2;
    let top = coords.top - titleElem.offsetHeight - 5;
    
    if (left < 0) {
        left = 0;
    }
    
    if (top < 0) {
        top = coords.top + target.offsetHeight + 5;
    }
    
    titleElem.style.left = left + 'px';
    titleElem.style.top = top + 'px';
    
    show_title = titleElem;
};

document.onmouseout = function(e) {
    if (show_title) {
        document.body.removeChild(show_title);
        show_title = null;
    }
};