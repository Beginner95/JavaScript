'use strict';

let array = ['Есть', 'жизнь', 'на', 'Марсе'];

let arrLength = array.map(function(item) {
  return item.length;
});

alert( arrLength );