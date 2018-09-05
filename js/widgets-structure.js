'use strict';

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
    
    function voteDecrease() {
        voteElem.innerHTML = +voteElem.innerHTML - 1;
    }
    
    function voteIncrease() {
        voteElem.innerHTML = +voteElem.innerHTML + 1;
    }
    
    this.setVote = function(vote) {
        voteElem.innerHTML = +vote;
    };
}

let voter = new Voter({
    elem: document.getElementById('voter')
});

voter.setVote(1);