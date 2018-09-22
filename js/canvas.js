'use strict';

let canvas = _('canvas');
let radiusInfo = _('radius');
let ctx = canvas.getContext('2d');
let pi = Math.PI;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(50, 200);
ctx.lineTo(150, 200);
ctx.closePath();
ctx.stroke();


function _(el) {
    return document.getElementById(el);
}

function c(obj) {
    console.log(obj);
}