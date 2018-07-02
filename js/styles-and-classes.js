'use strict';

let showNotification = function(options) {
    
    let notice = document.createElement('div');
    
    notice.className = 'notice';
    
    if (options.cssText) {
        notice.style.cssText = options.cssText;
    }
    
    notice.style.top = (options.top || 0) + 'px';
    notice.style.right = (options.right || 0) + 'px';
    
    if (options.className) {
        notice.classList.add(options.className);
    }
    
    notice.innerHTML = options.html;
    document.body.appendChild(notice);
    
    setTimeout(function(){
        document.body.removeChild(notice);
    }, 2500);
}

showNotification({
  top: 10,
  right: 10,
  html: "Привет",
  className: "welcome"
});