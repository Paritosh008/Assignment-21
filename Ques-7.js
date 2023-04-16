// Select all the h2 tags on screen and change their colour to
// purple.

//Solution

<!DOCTYPE html>
<html>
<head>
	<title>Change h2 Color Example</title>
	<style>
		h2 {
			color: blue;
		}
	</style>
</head>
<body>
	<h1>Welcome to my website!</h1>
	<h2>Section 1</h2>
	<p>Some content here.</p>
	<h2>Section 2</h2>
	<p>Some more content here.</p>

	<script>
		// Select all h2 elements on screen
		var h2Elements = document.querySelectorAll("h2");

		// Loop through all h2 elements and change their color to purple
		for (var i = 0; i < h2Elements.length; i++) {
			h2Elements[i].style.color = "purple";
		}
	</script>
</body>
</html>
