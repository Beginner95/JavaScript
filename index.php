<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Коллбэки и события на компонентах</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>

<form id="up_from" enctype="multipart/form-data" method="post">
    <input type="file" name="file1" id="file1"></br>
    <div id="details">
        <input type="button" value="Загрузить файл" onclick="uploadFile()">
        <progress id="my-progress" max="100" value=""></progress>
        <span id="status-progress"></span>
        <span id="loaded_n_total"></span>
    </div>
</form>

<script src="/js/progress.js"></script>
</body>
</html>