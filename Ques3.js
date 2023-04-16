// 3. Create a simple calculator that takes the input from
// input1, input 2 and add them together.

//Solution

<!DOCTYPE html>
<html>
<head>
    <title>Simple Calculator</title>
</head>
<body>
    <label for="input1">Input 1:</label>
    <input type="number" id="input1"><br><br>

    <label for="input2">Input 2:</label>
    <input type="number" id="input2"><br><br>

    <button onclick="add()">Add</button><br><br>

    <label for="result">Result:</label>
    <input type="number" id="result" disabled><br><br>

    <script>
        function add() {
            const input1 = Number(document.getElementById('input1').value);
            const input2 = Number(document.getElementById('input2').value);
            const result = input1 + input2;
            document.getElementById('result').value = result;
        }
    </script>
</body>
</html>
