'use strict';

let div = document.getElementById('widget');

let widgetName = div.dataset.widgetName;

alert(widgetName);

let widgetName2 = div.getAttribute('data-widget-name');

alert(widgetName2);