'use strict';

let delay = function(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

delay(5000)
  .then(() => alert("Hello!"))