//9. Remove an element from the screen using js dom.

<!DOCTYPE html>
<html>
<head>
	<title>Remove Element Example</title>
</head>
<body>
	<h1>Welcome to my website!</h1>
	<h2>Section 1</h2>
	<p>Some content here.</p>
	<h2>Section 2</h2>
	<p>Some more content here.</p>

	<button onclick="removeElement()">Remove Section 2</button>

	<script>
		function removeElement() {
			// Get the element to be removed
			var section2 = document.querySelector("h2:nth-of-type(2)");

			// Remove the element using the remove() method
			//section2.remove();

			// Alternatively, remove the element using the parentNode.removeChild() method
			section2.parentNode.removeChild(section2);
		}
	</script>
</body>
</html>
