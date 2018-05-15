'use strict';

let addClass = function(obj, cls) {
  let classes = obj.className ? obj.className.split(' ') : [];

  for (let i = 0; i < classes.length; i++) {
    if (classes[i] == cls) return;
  }

  classes.push(cls);

  obj.className = classes.join(' ');
}

let obj = {
  className: 'open menu'
};

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
alert(obj.className)