'use strict';
/*
for (let i = 2; i <= 10; i++){
    if (i % 2 != 0) continue;
    //alert( i );
}

let j = 0;

while (j < 3) {
    //alert( 'номер ' + j + '!');
    j++;
}

let num = 0;

while (num < 100 && num != null) {
    num = prompt('Введите число больше 100', '');
}*/

let a = 2;
let n = 10;

numbers:
  for (let i = a; i <= n; i++) {

    for (let j = a; j < i; j++) {
      if (i % j == 0) continue numbers;
    }

    alert( i );
  }





