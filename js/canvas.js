'use strict';

let canvas = _('canvas');
let ctx = canvas.getContext('2d');

canvas.height = 800;
canvas.width = 800;

const pixel = 20;


let teta = 0,
    timer;

let btn = _('button');
let btn_clear = _('button_clear');
btn_clear.onclick = function() {
    clear();
    drawGrid();
}

btn.onclick = function(e) {
    if (btn.className == 'run') {
        e.target.className = 'stop';
        e.target.innerHTML = 'Run'
    } else {
        e.target.className = 'run';
        e.target.innerHTML = 'Stop'
    }
    spiro();
}

function spiro() {
    if ('run' == btn.className) {
        let R = +_('R').value, 
            r = +_('r').value, 
            d = +_('d').value, 
            speed = +_('speed').value,
            color = _('color').value,
            Y = +_('Y').value,
            X = +_('X').value;
        let x = (R - r) * Math.cos(teta) + d * Math.cos( (R - r) * teta / r);
        let y = (R - r) * Math.sin(teta) - d * Math.sin( (R - r) * teta / r);
        teta = teta + 0.1;
        ctx.fillStyle = color;
        ctx.fillRect(X + x, Y + y, 4, 4);
        timer = setTimeout(spiro, speed);
    }
}

function drawLine(x1, y1, x2, y2, color = '#f1f1f1') {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineJoin = 'miter';
    ctx.lineWidth = 1;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawCell(x, y, w, h) {
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'blue';
    ctx.lineJoin = 'miter';
    ctx.lineWidth = 1;
    ctx.rect(x, y, w, h);
    ctx.fill();
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawGrid() {
    const w = canvas.width;
    const h = canvas.height;
    const p = w / pixel;
    const xStep = w / p;
    const yStep = h / p;
    
    for (let x = 0; x < w; x+= xStep) {
        drawLine(x, 0, x, h);
    }
    
    for (let y = 0; y < h; y += yStep) {
        drawLine(0, y, w, y);
    }
}

drawGrid();

function _(el) {
    return document.getElementById(el);
}

function c(obj) {
    console.log(obj);
}