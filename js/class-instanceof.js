'use strict';

let calc, result;

while (true) {
  calc = prompt('Введите выражение?', '2-');
  if (calc == null) break;

  try {
    result = eval(calc);
    if (isNaN(result)) {
      throw new Error('Результат неопределён');
    }

    break;
  } catch (e) {
    alert( 'Ошибка: ' + e.message + ', повторите ввод' );
  }
}

alert( result );
