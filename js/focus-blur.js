'use strict';

document.getElementById('circle').onclick = function() {
    this.style.left = this.getBoundingClientRect().left + 'px';
    this.style.top = this.getBoundingClientRect().top + 'px';
    this.style.position = 'fixed';
};

document.getElementById('circle').onkeydown = function(e) {
    //console.log(e);

    switch (e.keyCode) {
        case 37: //left
            this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
            return false;
        case 38: //top
            this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
            return false;
        case 39: //righ
            this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
            return false;
        case 40: //bottom
            this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
            return false;
    }
};