'use strict';
// alert( 'Я - JavaScript!' );
// var planetaName = 'Земля';
// var userName = 'Петя';

// Шесть типов данных typeof
//Number - числовой тип как для целых так и для дробных
var n = 1234.55;
alert(typeof(n));
//Infinity - бесконечность
alert(1 / 0);
//Nan - ошибка вычислений
alert('Vaha' * 2);
//String - строка
var str = 'Vaha';
alert(typeof(str))
//Boolean - булевый логический тип ture and false
var checked = true;
alert(typeof(checked));
//Null - ссылка на несуществуещий объект
var age = null;
alert(age);
//Undefined - пустая переменная в ней ничего нет
var foo;
alert(foo);
//Object - тип объекта для коллекций даннхы и для объявления более сложных сущностей
var obj = {name: 'Vaha', age: 26};
alert(obj);
//Есть 5 «примитивных» типов: number, string, boolean, null, undefined и 6-й тип – объекты object.