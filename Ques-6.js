// 6. Using alert, prevent a person from leaving the screen using JS
// DOM.

//Solution

<!DOCTYPE html>
<html>
<head>
	<title>Prevent Leaving Screen Example</title>
</head>
<body>
	<h1>Welcome to my website!</h1>
	<p>Don't leave me!</p>

	<script>
		window.addEventListener("beforeunload", function(e) {
			var confirmationMessage = "Are you sure you want to leave this page?";
			(e || window.event).returnValue = confirmationMessage;
			return confirmationMessage;
		});
	</script>
</body>
</html>


