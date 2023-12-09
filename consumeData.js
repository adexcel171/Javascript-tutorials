To consume API data and manipulate it using JavaScript, you can use various methods, including fetch for making requests, and then apply map, filter, and reduce to process the data. Here's a basic example using the Fetch API:

javascript
Copy code
// Function to fetch data from an API
async function fetchData(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Example API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Fetch data from the API
fetchData(apiUrl)
  .then((apiData) => {
    // Map example: Extract titles from the data
    const titles = apiData.map((item) => item.title);
    console.log('Mapped Titles:', titles);

    // Filter example: Filter posts with userId 1
    const filteredData = apiData.filter((item) => item.userId === 1);
    console.log('Filtered Data:', filteredData);

    // Reduce example: Calculate the total number of characters in all titles
    const totalCharacters = apiData.reduce(
      (accumulator, item) => accumulator + item.title.length,
      0
    );
    console.log('Total Characters in Titles:', totalCharacters);
  })
  .catch((error) => {
    // Handle errors
    console.error('Error processing data:', error);
  });
In this example:

The fetchData function is an asynchronous function that uses fetch to make a GET request to the specified API endpoint and returns the parsed JSON data.

The then block processes the data using map, filter, and reduce:

map: Extracts the titles from each item in the data.
filter: Filters the data to include only posts with userId equal to 1.
reduce: Calculates the total number of characters in all titles.
Remember to replace the apiUrl with the actual API endpoint you want to fetch data from. Additionally, consider error handling for robustness in a real-world application.