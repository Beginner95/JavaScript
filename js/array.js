'use strict';

let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-Ролл');

styles[styles.length - 2] = 'Классика';

alert( styles.shift() );

styles.unshift("Рэп", "Регги");

console.log(styles);