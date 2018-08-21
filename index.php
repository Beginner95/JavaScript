<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Формы: отправка, событие и метод submit</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
<h3>Нажмите на кнопку</h3>

<input type="button" value="Увидеть форму" id="show-button">


<div id="prompt-form-container">
    <form id="prompt-form">
        <div id="prompt-message"></div>
        <input name="text" type="text">
        <input type="submit" value="Ок">
        <input type="button" name="cancel" value="Отмена">
    </form>
</div>

<script src="/js/forms-submit.js"></script>
</body>
</html>