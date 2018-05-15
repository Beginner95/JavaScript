'use strict';

let getWeekDate = function(date) {
    let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    
    return days[date.getDay()];
}

let date = new Date(2012, 0, 3);

alert( getWeekDate(date) );