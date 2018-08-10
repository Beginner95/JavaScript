'use strict';

let select = document.body.children[0];

let selected = select.options[select.selectedIndex];

c('value: ' + selected.value + '\n' + 'text: ' + selected.text);

select.appendChild(new Option('Классика', 'Classic', true, true));


// Задание с массивом 
let arr = ['Грозный', 'Гудермес', 'Шали', 'Аргун'];

arr.forEach(function(item, i, arr) {
    select.appendChild(new Option(arr[i], i));
});

// Задание с объектами
let obj = {
    wolf: 'Волк',
    lion: 'Лев',
    panther: 'Пантера'
};

let hashKeys = Object.keys( obj );

for (let i = 0; i < hashKeys.length; i++) {
    select.appendChild(new Option(obj[hashKeys[i]], hashKeys[i]));
}


function c(str)
{
    console.log(str);
}