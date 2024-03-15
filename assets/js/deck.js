//code to conduct search
const queryString = window.location.search;
console.log(queryString);

//code "where to search"
const urlParams = new URLSearchParams(queryString);
console.log(urlParams);

//parse for deck id
const deckId = parseInt(urlParams.get("deck"));
//console =  returns "number".
console.log(typeof deckId);

//confirm all arrays accessed
// console.log(decks);
// console.log(cards);
// console.log(cardObjects);

//VAR assigned to deck
let selectedDeck
//For loop to index through decks.js array and pass the deck type to the corresponding deck page.
for (let i = 0; i < decks.length; i++) {
    console.log(decks[i]);
    //CL result confirms all three decks accessed
    if (decks[i].id === deckId) {
        selectedDeck = decks[i];
    }
}
//CL result confirms deck type assigned to specific deck page. Tested by clicking on home page.
console.log(selectedDeck);

//VAR assigned to card 
let selectedDeckCard
//For loop to index through cards.js to access name and suit for each card.
for (let i = 0; i < cards.length; i++) {
    console.log(cards[i]);
    //CL results all 79 cards accessed.
    if (cards[i].id === deckId) {
        //If resulted in reference error as not defined when I used cardId.
        //Changed to deckId - see console.log LINE: 45
        selectedDeckCard = cards[i];
    }
}
//CL result as card id: 1
console.log(selectedDeckCard);

//VAR - create deck page container
let container = document.querySelector(".container");
console.log(container);

