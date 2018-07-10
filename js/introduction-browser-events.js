'use strict';

let menu = document.getElementById('menu');
var title = document.querySelector('.menu');

title.onclick = function() {
    menu.classList.toggle('open');
};