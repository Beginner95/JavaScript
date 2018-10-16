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
    <tr><td colspan="2"><br></td></tr>
    <tr>
        <td>Speed: </td>
        <td><input type="number" id="speed" value="30"></td>
        <td>Color: </td>
        <td><input type="text" id="color" value="ff0101"></td>
    </tr>
    <tr>
    <tr>
        <td>O/x: </td>
        <td><input type="number" id="X" value="200"></td>
        <td>O/y: </td>
        <td><input type="number" id="Y" value="200"></td>
    </tr>
    <tr>
        <td><button id="button">Run</button></td>
        <td><button id="button_clear">Clear</button></td>
    </tr>
</table>
</div>
<br>
<canvas id="canvas"></canvas>

<script src="/js/canvas.js"></script>
</body>
</html>