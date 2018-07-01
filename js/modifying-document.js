'use strict';

let ul = document.createElement('ul');

document.body.appendChild(ul);

while (true) {
    let data = prompt('Введите текст для пункта списка', '');
    
    if (!data) {
        break;
    }
    
    let li = document.createElement('li');
    
    li.appendChild(document.createTextNode(data));
    
    ul.appendChild(li);
}