<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Шаблонизатор LoDash</title>
    <link rel="stylesheet" href="/style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js"></script>    
</head>
<body>
<div id="grid-holder"></div>

<script type="text/template" id="grid-template">
    <table>
        <thead>
            <tr>
                <th>Имя</th>
                <th>Возраст</th>
            </tr>
        </thead>
        <tbody>
            <% for(var i = 0; i < list.length; i++) { %>
            <tr>
                <td>
                    <%=list[i].name%>
                </td>
                <td>
                    <%=list[i].age%>
                </td>
            </tr>
            <% } %>
        </tbody>
    </table>
</script>

<script src="/js/template-lodash.js"></script>

</body>
</html>