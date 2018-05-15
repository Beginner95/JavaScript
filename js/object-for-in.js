'use strict';

let salaries = {
    'Vasy': 10,
    'Pety': 3,
    'Hope': 6
}

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);