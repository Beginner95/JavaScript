'use strict';

document.onmousedown = function(e) {
    let dragElement = e.target;
    
    if (!dragElement.classList.contains('draggable')) return;
    
    let coords, shiftX, shiftY;
    
    startDrag(e.clientX, e.clientY);
    
    document.onmousemove = function(e) {
        moveAt(e.clientX, e.clientY);
    };
    
    dragElement.onmouseup = function() {
        finishDrag();
    };
    
    function startDrag(clientX, clientY) {
        shiftX = clientX - dragElement.getBoundingClientRect().left;
        shiftY = clientY - dragElement.getBoundingClientRect().top;
        
        dragElement.style.position = 'fixed';
        
        document.body.appendChild(dragElement);
        
        moveAt(clientX, clientY);
    };
    
    function finishDrag() {
        dragElement.style.top = parseInt(dragElement.style.top) + pageYOffset + 'px';
        dragElement.style.position = 'absolute';
        
        document.onmousemove = null;
        dragElement.onmouseup = null;
    }
    
    function moveAt(clientX, clientY) {
        let newX = clientX - shiftX;
        let newY = clientY - shiftY;
        let newBottom = newY + dragElement.offsetHeight;
        
        if (newBottom > document.documentElement.clientHeight) {
            let docBottom = document.documentElement.getBoundingClientRect().bottom;
            
            let scrollY = Math.min(docBottom - newBottom, 10);
            
            if (scrollY < 0) {
                scrollY = 0;
            }
            
            window.scrollBy(0, scrollY);
            
            newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
        }
        
        if (newY < 0) {
            let scrollY = Math.min(-newY, 10);
            
            if (scrollY < 0) {
                scrollY = 0;
            }
            
            window.scrollBy(0, -scrollY);
            
            newY = Math.max(newY, 0);
        }
        
        if (newX < 0) {
            newX = 0;
        }
        
        if (newX > document.documentElement.clientWidth - dragElement.offsetHeight) {
            newX = document.documentElement.clientWidth - dragElement.offsetheight;
        }
        
        dragElement.style.left = newX + 'px';
        dragElement.style.top = newY + 'px';
    }
    
    return false;
}