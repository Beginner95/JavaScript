<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Формы: отправка, событие и метод submit</title>
    <link rel="stylesheet" href="/style.css">
    
</head>
<body>
<pre>
Клик на элементе выделяет только его.
Ctrl(Cmd)+Клик добавляет/убирает элемент из выделенных.
Shift+Клик добавляет промежуток от последнего кликнутого к выделению.
</pre>

<ul>
    <li>Кристофер Робин</li>
    <li>Винни-Пух</li>
    <li>Ослик Иа</li>
    <li>Мудрая Сова</li>
    <li>Кролик. Просто кролик.</li>
</ul>

<script src="/js/widgets-structure.js"></script>
<button onclick="alert(listSelect.getSelected())">Показать отмеченные</button>

</body>
</html>