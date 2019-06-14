let recogVoice = function(e) {
    let askForMic = 1;
    let recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    
    recognition.onresult = function(e) {
        for (let i = e.resultIndex; i < e.results.length; ++i) {
            let result = e.results[i][0].transcript;
            let txtA = getId('txt').value = result;
        }
    }
    
    recognition.onerror = function(event) {
        if (event.error == 'not-allowed') {
            askForMic == 0; 
            c('Разрешите микрофон');
        } else {
            c('Ошибка: ' + event.error);
            c(event);
        }
    }
    if (askForMic == 1) {
        recognition.start();
    }
}

recogVoice();

function getId(id) {
    return document.getElementById(id);
}

function c(str) {console.log(str);}