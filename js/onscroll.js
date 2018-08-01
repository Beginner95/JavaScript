'use strict';

var updownElem = document.getElementById('updown');
console.log(updownElem);
var pageYLabel = 0;

updownElem.onclick = function() {
    var pageY = window.pageYOffset || document.documentElement.scrollTop;
    
    switch (this.className) {
        case 'up':
            pageYLabel = pageY;
            window.scrollTo(0, 0);
            this.className = 'down';
            break;
            
        case 'down':
            window.scrollTo(0, pageYLabel);
            this.className = 'up';
    }
}

window.onscroll = function() {
    let pageY = window.pageYOffset || document.documentElement.scrollTop;
    let innerHeight = document.documentElement.clientHeight;
    
    switch (updownElem.className) {
        case '':
            if (pageY > innerHeight) {
                updownElem.className = 'up';
            }
            break;
        
        case 'up':
            if (pageY < innerHeight) {
                updownElem.className = '';
            }
            break;
            
        case 'down':
            if(pageY > innerHeight) {
                updownElem.className = 'up';
            }
            break;
    }
}