<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Поиск: getElement* и querySelector* и не только</title>    
</head>
<body>

    <form name="search">
    <label>Поиск по сайту:
      <input type="text" name="search">
    </label>
    <input type="submit" value="Искать!">
  </form>

  <hr>

  <form name="search-person">
    Поиск по посетителям:
    <table id="age-table">
      <tr>
        <td>Возраст:</td>
        <td id="age-list">
          <label>
            <input type="radio" name="age" value="young">до 18</label>
          <label>
            <input type="radio" name="age" value="mature">18-50</label>
          <label>
            <input type="radio" name="age" value="senior">более 50</label>
        </td>
      </tr>

      <tr>
        <td>Дополнительно:</td>
        <td>
          <input type="text" name="info[0]">
          <input type="text" name="info[1]">
          <input type="text" name="info[2]">
        </td>
      </tr>

    </table>

    <input type="submit" value="Искать!">
  </form>
    
	<script src="/js/searching-elements-dom.js"></script>
    
</body>
</html>