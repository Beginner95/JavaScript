'use strict';

function getChar(event) {
    if (event.which == null) {
        if (event.keyCode < 32) {
            return null;
        } else {
            return String.fromCharCode(event.keyCode);
        }
    }
    
    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) {
            return null;
        } else {
            return String.fromCharCode(event.which);
        }
    }
    
    return null;
}

let form = document.forms.calc;
let moneyElem = form.elements.money;

moneyElem.onkeypress = function(e) {
    e = e || event;
    let chr = getChar(e);
    
    if (e.ctrlKey || e.altKey || chr == null) {
        return;
    }
    
    if (chr < '0' || chr > '9') {
        return false;
    }
}

moneyElem.onkeyup = calc;

moneyElem.onpropertychange = function() {
    event.propertyName == 'value' && calc();
}

let capitalizationElem = form.elements.capitalization;
capitalizationElem.onclick = calc;

let monthsElem = form.elements.months;
monthsElem.onchange = calc;

function calc() {
    let sum = +moneyElem.value;
    if (!sum) {
        return;
    }
    
    let monthlyIncrease = 0.01;
    
    if (!capitalizationElem.checked) {
        sum = sum * (1 + monthlyIncrease * monthsElem.value);
    } else {
        for (let i = 0; i < monthsElem.value; i++) {
            sum = sum * (1 + monthlyIncrease);
        }
    }
    
    sum = Math.round(sum);
    
    let height = sum / moneyElem.value * 100 + 'px';
    document.getElementById('height-after').style.height = height;
    document.getElementById('money-before').innerHTML = moneyElem.value;
    document.getElementById('money-after').innerHTML = sum;
}

calc();
















