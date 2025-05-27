const quotes = [
    {
        quote: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Don't cry because it's over, smile because it happened.",
        author: "Dr. Seuss"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    }
];

const quoteElem = document.getElementById("quote");
const authorElem = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElem.textContent = `"${quotes[randomIndex].quote}"`;
    authorElem.textContent = `- ${quotes[randomIndex].author}`;
}

newQuoteBtn.addEventListener("click", displayRandomQuote);