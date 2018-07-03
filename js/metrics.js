'use strict';

let div = document.getElementById('moving-div');

let cloneDiv = document.createElement('div');

cloneDiv.style.height = div.offsetHeight + 'px';

let computedStyle = div.currentStyle || getComputedStyle(div, '');

cloneDiv.style.marginTop = computedStyle.marginTop;
cloneDiv.style.marginBottom = computedStyle.marginBottom;

document.body.insertBefore(cloneDiv, div);

div.style.position = 'absolute';
div.style.right = div.style.top = 0;