'use strict';

let listSelect = new ListSelect({
    elem: document.querySelector('ul')
});

function ListSelect(options) {
    let elem = options.elem;
    let lastClickedLi = null;
    
    elem.onmousedown = function() {
        return false;
    };
    
    elem.onclick = function(e) {
        let li = e.target.closest('li');
        
        if (!li) {
            return;
        }
        
        if (e.metaKey || e.ctrlKey) {
            toggleSelect(li);
        } else if (e.shiftKey) {
            selectFromLast(li);
        } else {
            selectSingle(li);
        }
        
        lastClickedLi = li;
    };
    
    function deselectAll() {
        [].forEach.call(elem.children, function(child) {
            child.classList.remove('selected');
        });
    }
    
    function toggleSelect(li) {
        li.classList.toggle('selected');
    }
    
    function selectSingle(li) {
        deselectAll();
        li.classList.add('selected');
    }
    
    function selectFromLast(target) {
        let startElem = lastClickedLi || elem.children[0];
        
        target.classList.add('selected');
        if (startElem == target) {
            return;
        }
        
        let isLastClickedBefore = startElem.compareDocumentPosition(target) & 4;
        
        if (isLastClickedBefore) {
            for (let elem = startElem; elem != target; elem = elem.nextElementSibling) {
                elem.classList.add('selected');
            }
        } else {
            for (let elem = startElem; elem != target; elem = elem.previousElementSibling) {
                elem.classList.add('selected');
            }
        }
    }
    
    this.getSelected = function() {
        return [].map.call(elem.querySelectorAll('.selected'), function(li) {
            return li.innerHTML;
        });
    };
}