'use strict';

function _(el) {
    return document.getElementById(el);
}

function uploadFile() {
    let file = _('file1').files[0];
    let formdata = new FormData();
    formdata.append('file1', file);
    
    let ajax = new XMLHttpRequest();
    ajax.upload.addEventListener('progress', progressHandler, false);
    ajax.addEventListener('load', completeHandler, false);
    ajax.addEventListener('error', errorHandler, false);
    ajax.addEventListener('abort', abortHandler, false);
    
    ajax.open('POST', '/php/file_upload.php');
    ajax.send(formdata);
}

function progressHandler(event) {
    _('loaded_n_total').innerHTML = 'Загружено ' + event.loaded + ' байтов ' + event.total;
    let percent = (event.loaded / event.total) * 100;
    _('my-progress').value = Math.round(percent);
    _('status-progress').innerHTML = Math.round(percent) + ' % загрузка... пожалуйста подождите';
}

function completeHandler(event) {
    _('status-progress').innerHTML = event.target.responseText;
    _('my-progress').value = 0;
}

function errorHandler(event) {
    _('status-progress').innerHTML = 'Загрузка не удалась';
}

function abortHandler(event) {
    _('status-progress').innerHTML = 'Загрузка прервана';
}


let file_selected = _('file1');
file_selected.onblur = function(e) {
    _('details').style.display = 'block';
}