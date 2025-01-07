const quotes = [
    "Be yourself; everyone else is already taken.",
    "So many books, so little time.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "A room without books is like a body without a soul.",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "You only live once, but if you do it right, once is enough.",
    "Be the change that you wish to see in the world.",
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    "If you tell the truth, you don't have to remember anything.",
    "A friend is someone who knows all about you and still loves you.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "Always forgive your enemies; nothing annoys them so much.",
    "We accept the love we think we deserve.",
    "Without music, life would be a mistake."
]

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }
    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length);

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx);
        break
    }
}