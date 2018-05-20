'use strict';

let Accumulator = function(startingValue) {
    this.value = startingValue;
    
    this.read = function() {
        this.value += +prompt('Значение для добавления', '');
    };
};

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert( accumulator.value );