// 5. Using JS Dom select a button and set its onclick event to
// logging hello in the console.

//Solution:

<!DOCTYPE html>
<html>
<head>
	<title>Button onclick Event Example</title>
</head>
<body>
	<button id="myButton">Click me</button>

	<script>
		// Select the button element by its id
		var myButton = document.getElementById("myButton");

		// Add an onclick event to the button element
		myButton.onclick = function() {
			console.log("hello");
		};
	</script>
</body>
</html>

