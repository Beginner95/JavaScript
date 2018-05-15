'use strict';

let multiplyNumeric = function(obj) {
    for (let key in obj) {
        
        if (isNaN(obj[key])) {
            continue;
        }
        
        obj[key] *= 2;
    }
}

let menu = {
  width: 200,
  height: 30.20,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);