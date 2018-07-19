'use strict';

let ul = document.querySelector('ul');

let lastClickedLi = null;

// --- обработчики ---

ul.onclick = function(event) {
    let target = event.target;

    // возможно, клик был внутри списка UL, но вне элементов LI
    if (target.tagName != "LI") return;

    // для Mac проверяем Cmd, т.к. Ctrl + click там контекстное меню
    if (event.metaKey || event.ctrlKey) {
        toggleSelect(target);
    } else if (event.shiftKey) {
        selectFromLast(target);
    } else {
        selectSingle(target);
    }

    lastClickedLi = target;
}

ul.onmousedown = function() {
    return false;
};

// --- функции для выделения ---

function toggleSelect(li) {
    li.classList.toggle('selected');
}

function selectFromLast(target) {
    let startElem = lastClickedLi || ul.children[0];

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
    elem.classList.add('selected');
}




function deselectAll() {
    for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].classList.remove('selected');
    }
}

function selectSingle(li) {
    deselectAll();
    li.classList.add('selected');
}