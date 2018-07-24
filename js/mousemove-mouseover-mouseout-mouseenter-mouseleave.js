'use strict';

let updateTime = function() {
    let clock = document.getElementById('elem');
    let date = new Date();
    
    let hours = date.getHours();
    clock.children[0].innerHTML = hours;
    
    let minutes = date.getMinutes();
    clock.children[1].innerHTML = minutes;
    
    let seconds = date.getSeconds();
    clock.children[2].innerHTML = seconds;
}


let HoverIntent = function (options) {
    options = Object.create(options);
    options.interval = options.interval || 100;
    
    options.sensitivity = options.sensitivity || 0.1;
    let elem = options.elem;
    
    let cX, cY, pX, pY, cTime, pTime;
    let checkSpeedInterval, isOverElement, isHover;
    
    elem.addEventListener('mouseover', onMouseOver);
    elem.addEventListener('mouseout', onMouseOut);
    
    function onMouseOver(event) {
        if (isOverElement) return;
        
        isOverElement = true;
        
        pX = event.pageX;
        pY = event.pageY;
        
        pTime = Date.now();
        
        elem.addEventListener('mousemove', onMouseMove);
        checkSpeedInterval = setInterval(trackSpeed, options.interval);
    }
    


    function onMouseOut(event) {
        if (!event.relatedTarget || !elem.contains(event.relatedTarget)) {
            isOverElement = false;
            elem.removeEventListener('mousemove', onMouseMove);
            clearInterval(checkSpeedInterval);
            
            if (isHover) {
                options.out.call(elem, event);
                isHover = false;
            }
        }
    }

    let onMouseMove = function(event) {
        cX = event.pageX;
        cY = event.pageY;
        cTime = Date.now();
    }

    let trackSpeed = function(event) {
        let speed;
        
        if (!cTime || cTime == pTime) {
            speed = 0;
        } else {
            speed = Math.sqrt(Math.pow(pX - cX, 2) + Math.pow(pY - cY, 2)) / (cTime - pTime);
        }
        
        if (speed < options.sensitivity) {
            clearInterval(checkSpeedInterval);
            isHover = true;
            options.over.call(elem, event);
        } else {
            pX = cX;
            pY = cY;
            pTime = cTime;
        }
    }
    
    this.destroy = function() {
        elem.removeEventListener('mousemove', onMouseMove);
        elem.removeEventListener('mouseover', onMouseOver);
        elem.removeEventLIstener('mouseout', onMouseOut);
    }

}

setInterval(function() {
    new HoverIntent({
        elem: elem,
        over: function() {
            tooltip.hidden = false;
        },
        out: function() {
            tooltip.hidden = true;
        }
    });
}, 2000);

let clockStart = function() {
    setInterval(updateTime, 1000);
    updateTime();
}

clockStart();

