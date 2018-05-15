'use strict';

let find = function(array, value) {
  if (array.indexOf) {
    return array.indexOf(value);
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }

  return -1;
}

let arr = ['a', -1, 2, 'b'];

let index = find(arr, 2);

alert( index );