'use strict';

let canvas = _('canvas');
let ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let R = +_('R').value, 
    r = +_('r').value,
    d = +_('d').value,
    teta = 0,
    timer;

let inp = _('elem');
let inputs = inp.getElementsByTagName('input');

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    input.onblur = function(e) {
        if (true === (e.target.id == 'R')) {
            R = +e.target.value
        } else if (true === (e.target.id == 'r')) {
            r = +e.target.value
        } else if (true === (e.target.id == 'd')) {
            d = +e.target.value
        } else {
            R = 0;
            r = 0;
            d = 0;
        }
        spiro();
    }
}
    
function spiro() {    
    let x = (R - r) * Math.cos(teta) + d * Math.cos( (R - r) * teta / r);
    let y = (R - r) * Math.sin(teta) - d * Math.sin( (R - r) * teta / r);
    teta = teta + 0.1;
    ctx.fillRect(300 + x, 300 + y, 4, 4);
    timer = setTimeout(spiro, 10);
}

//spiro();

function _(el) {
    return document.getElementById(el);
}

function c(obj) {
    console.log(obj);
}