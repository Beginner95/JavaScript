'use strict';

let canvas = _('canvas');
let ctx = canvas.getContext('2d');
let pi = Math.PI;
let isMoseDown = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener('mousemove', function(event) {
    //c(event);
    //c(isMoseDown);
    if (true === isMoseDown) {
        ctx.beginPath();
        ctx.arc(event.clientX, event.clientY, 30, 0, pi * 2);
        ctx.fill();
    }
});

canvas.addEventListener('mousedown', function(){
    isMoseDown = true;
});

canvas.addEventListener('mouseup', function(){
    isMoseDown = false;
});


function _(el) {
    return document.getElementById(el);
}

function c(obj) {
    console.log(obj);
}