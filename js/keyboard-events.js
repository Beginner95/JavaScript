'use strict';

let input = document.getElementsByTagName('input')[0];

input.onkeypress = function(e) {
    //c(e);
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) {
        return;
    }
    
    let chr = getChar(e);
    
    if (chr == null) {
        return;
    }
    
    if (chr < '0' || chr > '9') {
        return false;
    }
};

let getChar = function(event) {
    if (event.which == null) {
        if (event.keyCode < 32) {
            return null;
        }
        return String.fromCharCode(event.keyCode);
    }
    
    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) {
            return null;
        }
        return String.fromCharCode(event.which);
    }
    return null;
};

function c(str)
{
    console.log(str);
}