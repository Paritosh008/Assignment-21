//4. What is the error in the following code?
// <!DOCTYPE html>
//   <html>
//   <body>
//   <p class="text">Hello World!</p>
// <script>
//  document.getElementById("text").innerHTML = "Hi JS DOM!";
// </script>
// </body>
// </html>

//Solution:
The error in the code is that the getElementById() method is trying to find an element 
with an id of "text", but the paragraph element has a class of "text" instead of an id. 
To fix the error, you can either change the class attribute to an id attribute in the paragraph element, like this:

  <p id="text">Hello World!</p>

Or, you can use the getElementsByClassName() method to select the paragraph element by its class, like this:

document.getElementsByClassName("text")[0].innerHTML = "Hi JS DOM!";

//Write a code



<!DOCTYPE html>
  <html>
  <body>
  <p id="text">Hello world!</p>
<script>
    document.getElementsByClassName("text")[0].innerHTML = "Hi JS DOM!";
</script>
</body>
</html>


