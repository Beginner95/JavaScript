<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Навигация и свойства элементов формы</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
<form name="calc">
    <table>
        <tr>
            <td>Сумма</td>
            <td>
                <input name="money" type="text" value="1000">
            </td>
        </tr>
        <tr>
            <td>Срок в месяцах</td>
            <td>
                <select name="months">           
                    <option value="3">3 (минимум)</option>
                    <option value="6">6 (полгода)</option>
                    <option value="12" selected>12 (год)</option>
                    <option value="18">18 (1.5 года)</option>
                    <option value="24">24 (2 года)</option>
                    <option value="30">30 (2.5 года)</option>
                    <option value="36">36 (3 года)</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>С капитализацией</td>
            <td>
                <input name="capitalization" type="checkbox">
            </td>
            
        </tr>
    </table>
</form>

<table id="diagram">
    <tr>
      <th>Было:</th>
      <th>Станет:</th>
    </tr>
    <tr>
      <th id="money-before"></th>
      <th id="money-after"></th>
    </tr>
    <td>
      <div style="background: red;width:40px;height:100px"></div>
    </td>
    <td>
      <div style="background: green;width:40px;height:0" id="height-after"></div>
    </td>
  </table>

<script src="/js/events-change.js"></script>
</body>
</html>