Certainly! Here's an example using async/await to make an API request and handle the response:

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Async/Await Example</title>
</head>
<body>

<div id="data-container"></div>

<script>
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    // Update the content of the website with the fetched data
    document.getElementById('data-container').innerHTML = `
      <h1>${data.title}</h1>
      <p>${data.completed ? 'Completed' : 'Not completed'}</p>
    `;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async function
fetchData();
</script>

</body>
</html>
In this example:

The fetchData function is declared as an async function. This allows the use of await within the function.

Inside the fetchData function:

The fetch function is used to make a GET request to the JSONPlaceholder API.
The await keyword is used to pause execution and wait for the promise returned by fetch to resolve.
If the response is not OK (status code other than 2xx), an error is thrown.

The response is converted to JSON using await response.json().

The fetched data is used to update the content of the website.

This example demonstrates how async/await can simplify the syntax for handling asynchronous operations, making the code more readable and maintaining a clear flow of logic.





