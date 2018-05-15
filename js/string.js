'use strict';

let checkSpam = function(str) {
    
    let lowerStr = str.toLowerCase();
    
    return !!(~lowerStr.indexOf('js') || ~lowerStr.indexOf('css'));
}

alert( checkSpam('Я учу css') );
alert( checkSpam('CssJs') );
alert( checkSpam("innocent rabbit") );