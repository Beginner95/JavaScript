<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Synthesizer</title>
</head>
<body>
Частота
<input type="range" id="fIn" min="40" max="6000" oninput="show()" />
<span id="fOut"></span><br>
Тип
<input type="range" id="tIn" min="0" max="3" oninput="show()" />
<span id="tOut"></span><br>
Громкость
<input type="range" id="vIn" min="0" max="100" oninput="show()" />
<span id="vOut"></span><br>
Продолжительность
<input type="range" id="dIn" min="1" max="5000" oninput="show()" />
<span id="dOut"></span>
<br>
<button onclick='beep();'>></button>
    <script src="/js/synthesizer.js"></script>
</body>
</html>