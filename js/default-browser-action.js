'use strict';

let contents = document.getElementById('contents');

contents.onclick = function(event) {
    
    let handLink = function(href) {
        
        let isLeaving = confirm('Перейти на ' + href + '?');
        
        if (!isLeaving) return false;
    }
    
    let target = event.target;
    
    while(target != this) {
        if (target.nodeName == 'A') {   
            return handLink(target.getAttribute('href'));
        }
        target = target.parentNode;
    }
}