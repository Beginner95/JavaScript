'use strict';

let canvas = _('canvas');
let ctx = canvas.getContext('2d');
let pi = Math.PI;

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'green';
ctx.arc(80, 60, 50, 0, 2*pi, false);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = 'green';
ctx.fillStyle = 'red';
ctx.arc(180, 60, 40, 0, 2*pi, false);
ctx.stroke();
ctx.fill();

ctx.clearRect(0, 0, 700, 300);

canvas.onmousemove = function(e) {
    let x = e.offsetY;
    ctx.clearRect(0, 0, 700, 300);
    ctx.beginPath();
    ctx.arc(150, 75, Math.abs(x-200), 0, 2*pi, false);
    ctx.stroke();
    ctx.fill();
}


function _(el) {
    return document.getElementById(el);
}

function c(obj) {
    console.log(obj);
}