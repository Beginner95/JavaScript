'use strict';

let calculator = {
    
    
    read: function() {
        this.a = +prompt('Первое число', '');
        this.b = +prompt('Второе число', '');
    },
    
    sum: function() {
        return this.a + this.b;
    },
    
    mul: function() {
        return this.a * this.b;
    },
    
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());