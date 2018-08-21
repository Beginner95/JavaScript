'use strict';

function hideCover() {
    document.body.removeChild(document.getElementById('cover-div'));
}

function showCover() {
    let coverDiv = document.createElement('div');
    coverDiv.id = 'cover-div';
    document.body.appendChild(coverDiv);
}

function showPrompt(text, callback) {
    showCover();
    let form = document.getElementById('prompt-form');
    let container = document.getElementById('prompt-form-container');
    document.getElementById('prompt-message').innerHTML = text;
    form.elements.text.value = '';
    
    function complete(value) {
        hideCover();
        container.style.display = 'none';
        document.onkeydown = null;
        callback(value);
    }
    
    form.onsubmit = function() {
        let value = form.elements.text.value;
        if (value == '') {
            return false;
        }
        
        complete(value);
        return false;
    };
    
    form.elements.cancel.onclick = function() {
        complete(null);
    };
    
    document.onkeydown = function(e) {
        if (e.keyCode == 27) {
            complete(null);
        }
    };
    
    let lastElem = form.elements[form.elements.length -1];
    let firstElem = form.elements[0];
    
    lastElem.onkeydown = function(e) {
        if (e.keyCode == 9 && !e.shiftKey) {
            firstElem.focus();
            return false;
        }
    };
    
    firstElem.onkeydown = function(e) {
        if (e.keyCode == 9 && e.shiftKey) {
            lastElem.focus();
            return false;
        }
    };
    
    container.style.display = 'block';
    form.elements.text.focus();
}

document.getElementById('show-button').onclick = function() {
    showPrompt('Введите что-нибудь', function(value) {
        alert('Вы ввели ' + value);
    });
}




