'use strict';

let tree = document.querySelector('.tree');

let isOverTitle = function(evt, li) {
    let titleWrapper = document.createElement('span');
    let titleTextNode = li.firstChild;
    
    li.insertBefore(titleWrapper, titleTextNode);
    titleWrapper.appendChild(titleTextNode);
    
    let isClickOnTitle = (document.elementFromPoint(evt.clientX, evt.clientY) == titleWrapper);
    
    titleWrapper.removeChild(titleWrapper.firstChild);
    li.replaceChild(titleTextNode, titleWrapper);
    
    return isClickOnTitle;
}

tree.onclick = function(evt) {
    let e = evt || event;
    let target = e.target || e.srcElement;
    
    if (!isOverTitle(e, target)) return;
    
    let node = target.getElementsByTagName('ul')[0];
    
    if (!node) return;
    
    node.style.display = node.style.display ? '' : 'none';
}