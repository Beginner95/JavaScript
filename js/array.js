'use strict';

let num = [];

while (true) {
    let value = prompt('Введите число', 0);
    
    if ('' === value || null === value || isNaN(value)) break;
    
    num.push(+value);
}

let sum = 0;

for (let i = 0; i < num.length; i++) {
    sum += num[i];
}

alert( sum );