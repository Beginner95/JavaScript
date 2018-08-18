'use strict';

document.onkeydown = function(e) {
    if (e.keyCode == 27) {
        cancel();
        return false;
    }
    
    if ((e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) && !txtarea.offsetHeight) {
        edit();
        return false;
    }
    
    if ((e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) && txtarea.offsetHeight) {
        save();
        return false;
    }
};

function cancel() {
    txtarea.style.display = 'none';
    view.style.display = 'block';
}

function edit() {
    view.style.display = 'none';
    txtarea.value = view.innerHTML;
    txtarea.style.display = 'block';
    txtarea.focus();
}

function save() {
    txtarea.style.display = 'none';
    view.innerHTML = txtarea.value;
    view.style.display = 'block';
    //console.log(view);
}