'use strict';

let input = document.querySelector('[data-placeholder]');

showPlaceholder(input);

function showPlaceholder(input) {
    input.classList.add('placeholder');
    input.value = input.dataset.placeholder;
}

function showTooltip(input) {
    let tooltip = document.createElement('span');
    tooltip.innerHTML = input.dataset.placeholder;
    tooltip.className = 'placeholder-tooltip';
    tooltip.style.fontSize = getComputedStyle(input).fontSize;
    tooltip.style.left = input.getBoundingClientRect().left + 'px';
    document.body.appendChild(tooltip);
    tooltip.style.top = input.getBoundingClientRect().top - tooltip.offsetHeight - 4 + 'px';
    input.tooltip = tooltip;
}

input.onfocus = function() {
    if (input.classList.contains('placeholder')) {
        input.classList.remove('placeholder');
        input.value = '';
    }
    showTooltip(input);
};

input.onblur = function() {
    document.body.removeChild(input.tooltip);
    delete input.tooltip;
    
    if (input.value == '') {
        showPlaceholder(input);
    }
};