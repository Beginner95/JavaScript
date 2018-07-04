'use strict';

Object.defineProperty(window, 'pageYOffset', {
    get: function() {
        return document.documentElement.scrollTop;
    }
});

alert( window.pageYOffset );