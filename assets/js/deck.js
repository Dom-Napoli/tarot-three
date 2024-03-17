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

//VAR assigned to access objects in two-card-objects.js
let selectedDeckObjects;
//For loop to index through two-card-objects.js array an assign the objects for each individual card that corresponds with the deck page per the .deck_id.
for (let i = 0; i < cardObjects.length; i++) {
    // console.log(cardObjects[i]);
    //CL results in all card objects accessed
    if(cardObjects[i].deck_id === deckId) {
        selectedDeckObjects = cardObjects[i];
    }
}
//CL result confirmed
console.log(selectedDeckObjects);

//VAR assigned to access deck objects contained in decks.js
let selectedDeck;
//For loop to index through decks.js array and assign the objects for each deck that corresponds with the deck page per the .deck_id.
for (let i = 0; i < decks.length; i++) {
    // console.log(decks[i]);
    //CL result confirms all three decks accessed
    if (decks[i].id === selectedDeckObjects.deck_id) {
        selectedDeck = decks[i];
    }
}
//CL result confirmed
console.log(selectedDeck);

//VAR assigned to access card objects contained in cards.js
let selectedDeckCard;
//For loop to index through cards.js array assign the objects for each card that corresponds with the deck page per the .card_id.
for (let i = 0; i < cards.length; i++) {
    // console.log(cards[i]);
    //CL results all 79 cards accessed.
    if (cards[i].id === selectedDeckObjects.card_id) {
        selectedDeckCard = cards[i];
    }
}
//CL result as card
console.log(selectedDeckCard);

//VAR practice to access card back image
let selectedDeckCardBack;
for (let i = 0; i < decks.length; i++){
    if(decks[i].id === selectedDeckObjects.deck_id){
        selectedDeckCardBack = decks[i];
    }
}
console.log(selectedDeckCardBack);

//VAR assign all card objects that have the same .deck_id from two-card-objects.js array that matches selectedDeckObjects.deck_id. 
let matchDecksCards = []
for (let i = 0; i < cardObjects.length; i++) {
    if ((cardObjects[i].deck_id === selectedDeck.id) &&(cardObjects[i].id !== selectedDeckObjects.id)){
        matchDecksCards.push(cardObjects[i]);
    }
}
console.log(matchDecksCards);

//VAR - create deck page container
let container = document.querySelector(".container");
console.log(container);

