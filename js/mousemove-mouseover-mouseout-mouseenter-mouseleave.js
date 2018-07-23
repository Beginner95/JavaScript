'use strict';

var showingTooltip;

document.onmouseover = function(e) {
    var target = e.target;

    while (target !== this) {
        var tooltip = target.getAttribute('data-tooltip');
        if (tooltip) break;
        target = target.parentNode;
    }

    if (!tooltip) return;

    showingTooltip = showTooltip(tooltip, target);
}

document.onmouseout = function() {
    if (showingTooltip) {
        document.body.removeChild(showingTooltip);
        showingTooltip = false;
    }
}


function showTooltip(text, elem) {
    
    var tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = text;
    document.body.appendChild(tooltipElem);

    var coords = elem.getBoundingClientRect();

    var left = coords.left + (elem.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) {
        left = 0; 
    }


    var top = coords.top - tooltipElem.offsetHeight - 5;
    
    if (top < 0) {
        top = coords.top + elem.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';

    return tooltipElem;
}