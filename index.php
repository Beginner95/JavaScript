<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Привет мир!</title>
    <script src="https://learn.javascript.ru/test/libs.js"></script>
    <script src="/js/testing.js"></script>
</head>
<body>

    <script>
    
        function pow(x, n) {
            if (n < 0) return NaN;
            if (Math.round(n) != n) return NaN;
            
            let sum = 1;
            for (let i = 0; i < n; i++) {
                sum *= x;
            }
            return sum;
        }
    
    </script>
	
</body>
</html>