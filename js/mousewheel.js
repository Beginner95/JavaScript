'use strict';

document.onwheel = function(e) {
  if (e.target.tagName != 'TEXTAREA') return;
  let area = e.target;

  let delta = e.deltaY || e.detail || e.wheelDelta;

  if (delta < 0 && area.scrollTop == 0) {
    e.preventDefault();
  }

  if (delta > 0 && area.scrollHeight - area.clientHeight - area.scrollTop <= 1) {
    e.preventDefault();
  }
};