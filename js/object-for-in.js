'use strict';

let salaries = {
    'Vasy': 10,
    'Pety': 30,
    'Hope': 6
}

let sum = 0;
let name = '';

for (let key in salaries) {
    
    if (sum < salaries[key]) {
        
        sum = salaries[key];
        name = key;
        
    }
    
}

alert( name || 'Нет сотрудников' );