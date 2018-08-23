'use strict';

function showError(container, errorMessage) {
    container.className = 'error';
    let msgElem = document.createElement('span');
    msgElem.className = 'error-message';
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}

function resetError(container) {
    container.className = '';
    if (container.lastChild.className == 'error-message') {
        container.removeChild(container.lastChild);
    }
}

function validate(form) {
    let elems = form.elements;
    
    resetError(elems.from.parentNode);
    if (!elems.from.value) {
        showError(elems.from.parentNode, 'Укажите отправителя');
    }
    
    resetError(elems.password.parentNode);
    if (!elems.password.value) {
        showError(elems.password.parentNode, ' Придумайте пароль ');
    } else if (elems.password.value != elems.password2.value) {
        showError(elems.password.parentNode, ' Пароли не совпадают ');
    }
    
    resetError(elems.to.parentNode);
    if (!elems.to.value) {
        showError(elems.to.parentNode, ' Укажите получателя ');
    }
    
    resetError(elems.message.parentNode);
    if (!elems.message.value) {
        showError(elems.message.parentNode, ' Вы ничего не ввели');
    }
}