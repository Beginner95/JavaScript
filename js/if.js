'use strict';

/*
Используя конструкцию if..else, напишите код, который получает значение prompt, а затем выводит alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
---------
var officialNameJavaScript = prompt('"Каково "официальное" название JavaScript"', '');

if (officialNameJavaScript == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? "ECMAScript"!');
}

var answer = prompt('Введите значение', '');

if (answer > 0) {
    alert(1);
} else if (answer < 0) {
    alert(-1);
} else {
    alert(0);
}


Напишите код, который будет спрашивать логин (prompt).

Если посетитель вводит «Админ», то спрашивать пароль, если нажал отмена (escape) – выводить «Вход отменён», если вводит что-то другое – «Я вас не знаю».

Пароль проверять так. Если введён пароль «Чёрный Властелин», то выводить «Добро пожаловать!», иначе – «Пароль неверен», при отмене – «Вход отменён».
--------------------------------------
var login = prompt('Ваш логин', '');

if (login == null) {
    alert('Вход отменен');
} else if (login != 'Админ') {
    alert('Я вас не знаю');
} else {
    var password = prompt('Введите ваш пароль', '');
    
    if (password == null) {
        alert('Вход отменен');
    } else if (password != 'Чёрный Властелин') {
        alert('Пароль неверный');
    } else {
        alert('Добро пожаловать!');
    }
}


Перепишите if с использованием оператора '?':

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
---------------
let a = 4, b = 4;

let result = (a + b < 4) ? 'Мало' : 'Много';

alert(result);


Перепишите if..else с использованием нескольких операторов '?'.

Для читаемости – оформляйте код в несколько строк.

var message;

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
-----------------------------
var login = prompt ('Представьтесь', '');

let message = (login == 'Вася') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' : '';

alert(message);

*/
















