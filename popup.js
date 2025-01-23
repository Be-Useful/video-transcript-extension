// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', function () {

  // Get the search input and results div
  const searchInput = document.getElementById('search');
  const resultsDiv = document.getElementById('results');

  // Listen for a keyup event in the search input (triggered when the user types)
  searchInput.addEventListener('input', function () {
    const searchQuery = searchInput.value.trim(); // Get the value of the input

    // If the input is not empty, search
    if (searchQuery) {
      searchTranscript(searchQuery);
    } else {
      // Clear the results if the search query is empty
      resultsDiv.innerHTML = '';
    }
  });

  // This function will simulate searching through a transcript
  function searchTranscript(query) {
    // Simulating a search through a transcript with some hardcoded data
    const transcript = [
      { time: 30, text: "In this part, we will learn about JavaScript functions." },
      { time: 120, text: "Now, let's dive into arrays and objects in JavaScript." },
      { time: 200, text: "Here, we will explain how to use the DOM in JavaScript." }
    ];

    // Filter the transcript based on the query
    const results = transcript.filter(entry => entry.text.toLowerCase().includes(query.toLowerCase()));

    // Clear the previous results
    resultsDiv.innerHTML = '';

    // If there are results, display them
    if (results.length > 0) {
      results.forEach(result => {
        // Create a new div for each result
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');
        
        // Add a clickable link with the timestamp and text
        resultDiv.innerHTML = `<a href="#" data-time="${result.time}">Timestamp: ${result.time}s - ${result.text}</a>`;
        
        // Append the result div to the results section
        resultsDiv.appendChild(resultDiv);
      });

      // Add click functionality to each result to navigate to the timestamp
      document.querySelectorAll('.result a').forEach(link => {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          
          const timestamp = parseInt(this.getAttribute('data-time'));
          alert(`Jumping to ${timestamp} seconds...`);

          // Call the function to jump to the corresponding part of the video
          // For now, just logging it to the console (in a real scenario, you'd control the video player)
          console.log('Request Jumping to:', timestamp);
        });
      });

    } else {
      // No results found
      resultsDiv.innerHTML = 'No matching results found.';
    }
  }
});
