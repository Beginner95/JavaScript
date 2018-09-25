<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Canvas</title>
    <script src="https://js.cx/libs/animate.js"></script>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
<div id="elem">
<table>
    <tr>
        <td>R: </td>
        <td><input type="number" id="R" value="100"></td>
    </tr>
    <tr>
        <td>r: </td>
        <td><input type="number" id="r" value="60"></td>
    </tr>
    <tr>
        <td>d: </td>
        <td><input type="number" id="d" value="20"></td>
    </tr>
    <tr>
        <td>Speed: </td>
        <td><input type="number" id="speed" value="30"></td>
    </tr>
    <tr>
        <td>Color: </td>
        <td><input type="text" id="color" value="#ff0101"></td>
    <tr>
        <td colspan="2"><button id="button">Run</button></td>
    </tr>
</table>
</div>

<canvas id="canvas"></canvas>

<script src="/js/canvas.js"></script>
</body>
</html>