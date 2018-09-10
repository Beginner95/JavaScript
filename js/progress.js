'use strict';

function myProgress(time) {
    let start = 0;
    let timer = Math.round(time * 10);
    let progressElem = document.getElementById('my-progress');
    let statusProgress = document.getElementById('status-progress');
    let intervalId = setInterval(function(){
        
        if (start > 100) {
            clearInterval(intervalId);
            //alert('Прогресс загрузки заверщен!');
        } else {
            progressElem.value = start;
            statusProgress.innerHTML = start + '%';
        }
        
        start++;
        
    }, timer);
}

myProgress(2);


function updateSize() {
  var file = document.getElementById("uploadInput").files[0],
    ext = "не определилось",
    parts = file.name.split('.');
  if (parts.length > 1) ext = parts.pop();
  document.getElementById("e-fileinfo").innerHTML = [
    "Размер файла: " + file.size + " B",
    "Расширение: " + ext,
    "MIME тип: " + file.type
  ].join("<br>");
}

document.getElementById('uploadInput').addEventListener('change', updateSize);