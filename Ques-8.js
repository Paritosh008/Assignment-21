//Create a new <h4> tag on the screen using JS DOM.

<!DOCTYPE html>
<html>
<head>
	<title>Create h4 Tag Example</title>
</head>
<body>
	<h1>Welcome to my website!</h1>
	<h2>Section 1</h2>
	<p>Some content here.</p>
	<h2>Section 2</h2>
	<p>Some more content here.</p>

	<script>
		// Create a new h4 element
		var newH4 = document.createElement("h4");

		// Set the text content of the new h4 element
		newH4.textContent = "Section 3";

		// Add the new h4 element to the document
		document.body.appendChild(newH4);
	</script>
</body>
</html>
