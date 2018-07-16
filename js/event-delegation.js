'use strict';

let table = document.getElementById('table');

table.onclick = function(e) {
    
    if (e.target.tagName != 'TH') return;
    sortTable(e.target.cellIndex, e.target.getAttribute('data-type'));
    
};

let sortTable = function(colNum, type) {
    
    let tbody = table.getElementsByTagName('tbody')[0];
    let rowsArray = [].slice.call(tbody.rows);
    let compare = null;
    
    switch (type) {
        case 'number':
            compare = function(rowA, rowB) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
            };
            break;      
        case 'string':
            compare = function(rowA, rowB) {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML;
            };
            break;
    }
    
    rowsArray.sort(compare);
    table.removeChild(tbody);
    
    for (let i = 0; i < rowsArray.length; i++) {
        tbody.appendChild(rowsArray[i]);
    }
    
    table.appendChild(tbody);
};