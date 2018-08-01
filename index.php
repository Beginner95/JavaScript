<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Прокрутка: событие scroll</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>

<div id="matrix">
    <script>
        for (let i = 0; i < 3000; i++) {
            if (i % 2 == 0) {
                document.writeln('<span style="color: red; font-family: Arial; font-style: italic;">' + i + '</span>');
            }
            document.writeln('<span style="color: green; font-family: Consolas;">' + i + '</span>');
            
        }
    </script>
</div>

<div id="updown"></div>

<script src="/js/onscroll.js"></script>
</body>
</html>