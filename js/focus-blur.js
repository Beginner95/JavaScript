'use strict';

let capsLockEnabled = null;

function getChar(event) {
    if (event.which == null) {
        if (event.keyCode < 32) {
            return null;
        } else {
            return String.fromCharCode(event.keyCode);
        }
    }
    
    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) {
            return null;
        } else {
            return String.fromCharCode(event.which);
        }
    }
    
    return null;
}

if (navigator.platform.substr(0, 3) != 'Mac') {
    document.onkeydown = function(e) {
        if (e.keyCode == 20 && capsLockEnabled !== null) {
            capsLockEnabled = !capsLockEnabled;
        }
    }
}

document.onkeypress = function(e) {
    e = e || event;
    
    let chr = getChar(e);
    
    if (!chr) {
        return;
    }
    
    if (chr.toLowerCase() == chr.toUpperCase()) {
        return;
    }
    
    capsLockEnabled = (chr.toLowerCase() == chr && e.shiftKey) || (chr.toUpperCase() == chr && !e.shiftKey);
}


function checkCapsWarning() {
    document.getElementById('capsIndicator').style.display = capsLockEnabled ? 'block' : 'none';
}


function removeCapsWarning() {
    document.getElementById('capsIndicator').style.display = 'none';
}



