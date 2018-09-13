'use strict';

function loadPhones() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', '/db/phones.json', true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        button.parentNode.removeChild(button);

        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            try {
                var phones = JSON.parse(xhr.responseText);
            } catch (e) {
                cl('Некорректный ответ ' + e.message);
            }
        }
        showPhones(phones);
    }
}


function showPhones(phones) {
    phones.forEach(function(phone) {
        let list = _('list');
        let li = list.appendChild(document.createElement('li'));
        li.innerHTML = phone.name;
    });
}

function _(el) {
    return document.getElementById(el);
}

function cl(obj)
{
    console.log(obj);
}