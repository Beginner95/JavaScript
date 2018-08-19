<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Навигация и свойства элементов формы</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
  Введите текст(например, пароль) с нажатым CapsLock:
  <input type="text" onkeyup="checkCapsWarning(event)" onfocus="checkCapsWarning(event)" onblur="removeCapsWarning()" />

  <div style="display:none;color:red" id="capsIndicator">Внимание: нажат CapsLock!</div>

<script src="/js/focus-blur.js"></script>
</body>
</html>