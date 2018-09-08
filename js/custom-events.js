'use strict';

class Slider {
    constructor({element, max} = {}) {
        this.element = element;
        this.max = max;
        this.initiate();
    }

    initiate() {
        this.element.addEventListener('mousedown', e => {
            let target = e.target.closest('.thumb');
            if (!target || !this.element.contains(target)) return;
            let field = this.element;

            if (!this.thumbElement) this.thumbElement = target;

            let left = field.getBoundingClientRect().left + pageXOffset, shift = e.pageX - left - target.offsetLeft;
            let point;

            let onMouseMove = e => {
                point = Math.max(Math.min(
                    field.clientWidth - target.offsetWidth,
                    e.pageX - left - shift),
                    0
                );
                this.moveAt(point);

                this.element.dispatchEvent(new CustomEvent('slide', {
                    bubbles: true,
                    detail: this.getValue()
                }));
            };

            let onMouseUp = () => {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);

                this.element.dispatchEvent(new CustomEvent('change', {
                    bubbles: true,
                    detail: this.getValue()
                }));
            };

            target.addEventListener('dragstart', e => {
                e.preventDefault();
            });

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);

            e.preventDefault();
        });
    }

    moveAt(point) {
        this.thumbElement.style.left = point + 'px';
    }

    getValue() {
        return Math.round(
            this.thumbElement.offsetLeft / ((this.element.clientWidth - this.thumbElement.offsetWidth) / this.max)
        );
    }

    setValue(value) {
    if (!this.thumbElement) {
        this.thumbElement = this.element.querySelector('.thumb');
    }

    this.moveAt(
        (this.element.clientWidth - this.thumbElement.offsetWidth) / this.max * value);
    }
}


let slider = new Slider({
    element: document.querySelector('#slider'),
    max: 100
});

let sliderElem = document.getElementById('slider');
  
sliderElem.addEventListener('slide', e => {
    document.getElementById('slide').innerHTML = e.detail;
});

sliderElem.addEventListener('change', e => {
    document.getElementById('change').innerHTML = e.detail;
});


/*----debugger----*/
function c(str)
{
    console.log(str);
}