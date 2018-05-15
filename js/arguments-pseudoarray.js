'use strict';

let func = function(n) {
    alert( arguments.length ? 1 : 0 );
}

func(undefined);
func();