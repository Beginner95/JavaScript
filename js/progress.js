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
    
    ajax.open('POST', 'file_upload.php');
    ajax.send(formdata);
}

function progressHandler(event) {
    _('loaded_n_total').innerHTML = 'Загружено ' + event.loaded + ' байтов ' + event.total;
    let percent = (event.loaded / event.total) * 100;
    _('progressBar').value = Math.round(percent);
    _('status').innerHTML = Math.round(percent) + ' % загружено... пожалуйста подождите';
}

function completeHandler(event) {
    _('status').innerHTML = event.target.responseText;
    _('progressBar').value = 0;
}

function errorHandler(event) {
    _('status').innerHTML = 'Загрузка файла';
}

function abortHandler(event) {
    _('status').innerHTML = 'Загрузка заверщена';
}
