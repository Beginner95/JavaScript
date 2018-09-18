'use strict';

let canvas = _('canvas');
let ctx = canvas.getContext('2d');
let pi = Math.PI;

ctx.lineWidth = 5;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'green';

ctx.arc(150, 60, 50, 0, 2*pi, false);
ctx.stroke();
ctx.fill();

function _(el) {
    return document.getElementById(el);
}

function c(obj) {
    console.log(obj);
}