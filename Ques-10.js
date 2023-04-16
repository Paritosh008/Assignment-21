//10. Get the number of <p> tags on the screen using JS DOM.
<!DOCTYPE html>
<html>
<head>
	<title>Count Paragraphs Example</title>
</head>
<body>
	<h1>Welcome to my website!</h1>
	<p>Some content here.</p>
	<p>Some more content here.</p>
	<p>Even more content here.</p>

	<script>
		var paragraphs = document.getElementsByTagName("p");
		var numParagraphs = paragraphs.length;
		console.log("Number of <p> tags on the screen: " + numParagraphs);
	</script>
</body>
</html>
