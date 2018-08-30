<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Формы: отправка, событие и метод submit</title>
    <link rel="stylesheet" href="/style.css">
    <script src="/js/widgets-structure.js"></script>
</head>
<body>

<div id="clock" class="clock">
    <span class="hour">00</span>:<span class="min">00</span>:<span class="sec">00</span>
  </div>

  <script>
    let pageClock = new Clock({
      elem: document.getElementById('clock')
    });
  </script>

  <input type="button" onclick="pageClock.start()" value="Старт">
  <input type="button" onclick="pageClock.stop()" value="Стоп">

  <input type="button" onclick="alert('Часы должны останавливаться во время alert,\nи продолжать корректно работать после нажатия на ОК')" value="alert для проверки корректного возобновления">


</body>
</html>