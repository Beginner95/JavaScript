'use strict';

function runOnKeys(func) {
    let codes = [].slice.call(arguments, 1);
    let pressed = {};
    
    document.onkeydown = function(e) {
        e = e || window.event;
        
        pressed[e.keyCode] = true;
        
        for (var i = 0; i < codes.length; i++) {
            if (!pressed[codes[i]]) {
                return;
            }
        }
        
        pressed = {};
        func();
    };
    
    document.onkeyup = function(e) {
        e = e || window.event;
        delete pressed[e.keyCode];
    };
}

runOnKeys(
    function() {
        c('Вы нажали одновременно на E и F');
    },
    "E".charCodeAt(0),
    "F".charCodeAt(0)
);

function c(str)
{
    console.log(str);
}