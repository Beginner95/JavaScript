<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Формы: отправка, событие и метод submit</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>

<form>
    <table>
        <tr>
            <td>От кого</td>
            <td><input type="text" name="from"></td>
        </tr>
        <tr>
            <td>Ваш пароль</td>
            <td><input type="password" name="password">
        </tr>
        <tr>
            <td>Повторите пароль</td>
            <td><input type="password" name="password2"></td>
        </tr>
        <tr>
            <td>Куда</td>
            <td>
                <select name="to">
                    <option value="1">Отдел снабжения</option>
                    <option value="2">Отдел разработки</option>
                    <option value="3">Директору</option>
                </select>
            </td>
        </tr>
    </table>
    Сообщение:
    <label>
        <textarea name="message" style="display:block; width:400px; height:80px"></textarea>
    </label>
    <input type="button" onclick="validate(this.form)" value="Проверить">
</form>

<script src="/js/forms-submit.js"></script>
</body>
</html>