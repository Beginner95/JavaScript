<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Sort table</title>
</head>
<body>
<table id="indextable" border="1" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">
    <thead>
        <tr>
            <th><a href="javascript:SortTable(0,'T');">Author</a></th>
            <th><a href="javascript:SortTable(1,'T');">Title</a></th>
            <th><a href="javascript:SortTable(2,'N');">Rating</a></th>
            <th><a href="javascript:SortTable(3,'D','mdy');">Review Date</a></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Orson Scott Card</td>
            <td>The Memory Of Earth</td>
            <td align="center">2</td>
            <td>10/14/11</td>
        </tr>
        <tr>
            <td>Sarah-Kate Lynch</td>
            <td>Blessed Are The Cheesemakers</td>
            <td align="center">9</td>
            <td>1-12-2011</td>
        </tr>
        <tr>
            <td>John Irving</td>
            <td>The cider house rules</td>
            <td align="center">6 060.6</td>
            <td>January 31, 11</td>
        </tr>
        <tr>
            <td>Kate Atkinson</td>
            <td>When will there be good news?</td>
            <td align="center">7</td>
            <td>Nov. 31, 2001</td>
        </tr>
        <tr>
            <td>Kathy Hogan Trocheck</td>
            <td>Every Crooked Nanny</td>
            <td align="center">250.00</td>
            <td>10.21.21</td>
        </tr>
        <tr>
            <td>Stieg Larsson</td>
            <td>The Girl With The Dragon Tattoo</td>
            <td align="center">5 922.01</td>
            <td>August 3, 2022</td>
        </tr>
    </tbody>
</table>
<script src="/js/sorttable.js"></script>
</body>
</html>