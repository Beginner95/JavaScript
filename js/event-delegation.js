'use strict';

let container = document.getElementById('messages-container');

container.onclick = function(event) {
  if (!event.target.classList.contains('remove-button')) return;

  event.target.parentNode.hidden = !event.target.parentNode.hidden;
}