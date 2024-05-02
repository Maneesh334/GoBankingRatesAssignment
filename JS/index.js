const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";

// Select the button and joke display elements from the DOM
const buttonElement = document.getElementById("btn");
const jokeDisplayElement = document.getElementById("joke");

// Define the request options including an API Key header for the dad jokes API
const requestOptions = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

// Define the API endpoint URL
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes";

// Function to fetch and display a joke
async function getJoke() {
  try {
    // Update the button and joke display while fetching
    jokeDisplayElement.textContent = "Updating..."; // Use textContent for better accessibility
    buttonElement.disabled = true;
    buttonElement.textContent = "Loading...";

    // Fetch the joke data from the API
    const response = await fetch(apiUrl, requestOptions);
    const jokeData = await response.json();

    // Display the retrieved joke
    jokeDisplayElement.textContent = jokeData[0].joke;
  } catch (error) {
    // Handle error
    jokeDisplayElement.textContent = "An error occurred. Please try again later.";
    console.error("Error fetching joke:", error); // Log the error for debugging
  } finally {
    // Re-enable the button
    buttonElement.disabled = false;
    buttonElement.textContent = "Tell me a joke";
  }
}

// Add click event listener to the button
buttonElement.addEventListener("click", getJoke);
