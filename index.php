<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Шаблонизатор LoDash</title>
    <link rel="stylesheet" href="/style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js"></script>   
    <script src="https://cdn.polyfill.io/v1/polyfill.js?features=Element.prototype.closest"></script>
</head>
<body>
<script type="text/template" id="menu-template">
    <div class="menu">
        <span class="title"><%-title%></span>
    </div>
</script>

<script type="text/template" id="menu-list-template">
    <ul>
        <% for(var name in items) { %>
            <li>
                <a href="#<%=encodeURIComponent(name)%>">
                    <%-items[name]%>
                </a>
            </li>
        <% } %>
    </ul>
</script>

<script src="/js/template-lodash.js"></script>

</body>
</html>