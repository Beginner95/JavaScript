function Clock(options) {
  let elem = options.elem;
  let timer;

  function render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    elem.querySelector('.hour').innerHTML = hours;

    let min = date.getMinutes();
    if (min < 10) min = '0' + min;
    elem.querySelector('.min').innerHTML = min;

    let sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;
    elem.querySelector('.sec').innerHTML = sec;
  }

  this.stop = function() {
    clearInterval(timer);
  };

  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  };

}