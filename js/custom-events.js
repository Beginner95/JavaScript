'use strict';

let voter = new Voter({
    elem: document.getElementById('voter')
});

voter.setVote(10);

document.getElementById('voter').addEventListener('change', function(e) {
    //c(e);
    c(e.detail);
});


function Voter(options) {
    let elem = options.elem;
    let voteElem = elem.querySelector('.vote');
    
    elem.onclick = function(event) {
        if (event.target.closest('.down')) {
            voteDecrease();
        } else if (event.target.closest('.up')) {
            voteIncrease();
        }
    }
    
    elem.onmousedown = function() {
        return false;
    };
    
    function voteIncrease() {
        setVote(+voteElem.innerHTML + 1);
    }
    
    function voteDecrease() {
        setVote(+voteElem.innerHTML - 1);
    }
    
    function setVote(vote) {
        voteElem.innerHTML = +vote;
        
        let widgetEvent = new CustomEvent('change', {
            bubbles: true,
            detail: +vote
        });
        //c(widgetEvent);
        elem.dispatchEvent(widgetEvent);
    }
    
    this.setVote = setVote;
}



/*----debugger----*/
function c(str)
{
    console.log(str);
}