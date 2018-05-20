'use strict';

let Calculator = function() {
    let method = {
        '-': function(a, b) {
            return a - b;
        },
        '+': function(a, b) {
            return a + b;
        }
    };
    
    this.calculate = function(str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];
            
        if (!method[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        
        return method[op](a, b);
    }
    
    this.addMethod = function(name, func) {
        method[name] = func;
    };
};

let calc = new Calculator;

calc.addMethod('*', function(a, b) {
  return a * b;
});
calc.addMethod('/', function(a, b) {
  return a / b;
});
calc.addMethod('**', function(a, b) {
  return Math.pow(a, b);
});

let result = calc.calculate('4 / 3');
alert( result );