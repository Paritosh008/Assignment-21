// 11. Fetch the value of name from the following form.

// <!DOCTYPE html>
//   <html><head>
//   <meta charset=utf-8 />
//   </head><body>
// <form id="form1" onsubmit="getFormvalue()">
//   Name: <input type="text" id="name"><br>
//     <button type="submit">Submit</button>
// </form>
// </body>
// </html>

//Solution

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>Form Example</title>
</head>
<body>
	<form id="form1" onsubmit="getFormValue()">
		Name: <input type="text" id="name"><br>
		<button type="submit">Submit</button>
	</form>

	<script>
		function getFormValue() {
			// Get the form element
			var form = document.getElementById("form1");

			// Get the value of the name input field
			var name = form.elements["name"].value;

			// Log the name value to the console
			console.log("Name: " + name);

			// Prevent the form from submitting
			event.preventDefault();
		}
	</script>
</body>
</html>

