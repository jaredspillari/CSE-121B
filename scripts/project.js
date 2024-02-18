const text = document.getElementById("quote");
const authorElement = document.getElementById("author");
const tweetButton = document.getElementById("tweet");
const generateButton = document.getElementById("generate-btn");

const getNewQuote = async () => {
    // API for quotes
    const url = "https://type.fit/api/quotes";

    // Fetch the data from API
    const response = await fetch(url);

    // Convert response to JSON and store it in quotes array
    const allQuotes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    const index = Math.floor(Math.random() * allQuotes.length);

    // Store the quote present at the randomly generated index
    const quote = allQuotes[index].text;

    // Store the author of the respective quote
    let author = allQuotes[index].author;

    // If author is null, set it to "Anonymous"
    if (author === null) {
        author = "Anonymous";
    }

    // Function to dynamically display the quote and the author
    text.innerText = quote;
    authorElement.innerText = "~ " + author;

}

// Call getNewQuote initially
getNewQuote();

// Attach event listener to the Generate Quote button
generateButton.addEventListener("click", getNewQuote);
