'use strict';

let canvas = _('canvas');
let ctx = canvas.getContext('2d');
let pi = Math.PI;
let isMoseDown = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineWidth = 5 * 2;
canvas.addEventListener('mousemove', function(event) {
    //c(event);
    //c(isMoseDown);
    if (true === isMoseDown) {
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(event.clientX, event.clientY, 5, 0, pi * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(event.clientX, event.clientY);
    }
});

canvas.addEventListener('mousedown', function(){
    isMoseDown = true;
});

canvas.addEventListener('mouseup', function(){
    isMoseDown = false;
    ctx.beginPath();
});


function _(el) {
    return document.getElementById(el);
}

function c(obj) {
    console.log(obj);
}