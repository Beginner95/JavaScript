'use strict';

let canvas = _('canvas');
let ctx = canvas.getContext('2d');
let pi = Math.PI;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener('mousedown', function(event) {
    //c(event);
    ctx.beginPath();
    ctx.arc(event.clientX, event.clientY, 30, 0, pi * 2);
    ctx.fill();
    
});


function _(el) {
    return document.getElementById(el);
}

function c(obj) {
    console.log(obj);
}