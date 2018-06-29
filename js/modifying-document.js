'use strict';

if (!Element.prototype.remove) {
	Element.prototype.remove = function remove() {
		if (this.parentNode) {
			this.parentNode.removeChild(this);
		}
	};
}

let elem = document.body.children[0];

elem.remove();