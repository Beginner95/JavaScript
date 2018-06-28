'use strict';

let css = 'a[href*="://"]:not([href^="http://internal.com"])';
let links = document.querySelectorAll(css);

for (let i = 0; i < links.length; i++) {
  links[i].classList.add('external');
}