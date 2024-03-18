//STEP:1
//Below used start search. where to search, per deck id.  
//Number of decks on home page will equal the number of subsequent individual deck pages that will be created. 

//Conduct "search"
const queryString = window.location.search;
console.log(queryString);

//Search "where" 
const urlParams = new URLSearchParams(queryString);
console.log(urlParams);

//Parse "per deck id"
const deckId = parseInt(urlParams.get("deck"));
//console =  returns "number".
console.log(typeof deckId);

//confirm all arrays accessed
// console.log(decks);
// console.log(cards);
// console.log(cardObjects);

//STEP:2
//Create VARs to access objects in cardObjects.js/decks.js/cards.js by the deck id inorder to eventually pass them to the corresponding deck page.

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
//CL result as "number"
console.log(selectedDeckCard);

//VAR practice to access card back image
let selectedDeckCardBack;
for (let i = 0; i < decks.length; i++){
    if(decks[i].id === selectedDeckObjects.deck_id){
        selectedDeckCardBack = decks[i];
    }
}
console.log(selectedDeckCardBack);

//STEP:3 Use VARs to Match objects in all three arrays to the corresponding deck page.
//VAR Match all objects (identified by deck id) to create a new array and  "push" objects to the corresponding deck page.
let matchDecksCards = []
for (let i = 0; i < cardObjects.length; i++) {
    if ((cardObjects[i].deck_id === selectedDeck.id) &&(cardObjects[i].id !== selectedDeckObjects.id)){
        matchDecksCards.push(cardObjects[i]);
    }
}
//CL results in correct match of cards & decks to page.
//"&&" = Operator with the description of "and"
//"!==" = not equal value or not equal type"
//"&&" & "!==" operators imply that each deck's id number is not identical but the parameters are the same.""
console.log("cards & deck match page", matchDecksCards);
console.log("selectedDeckObjects, selectedDeck, & selectedDeckCard", selectedDeckObjects, selectedDeck, selectedDeckCard);

//STEP:4 Use VARs "document.querySelector" to "method" the first element that matches html and css files.
let container = document.querySelector(".container");
//CL result div.container
console.log(container);

let deckContainer = document.querySelector(".deck-container");
//CL result div.deck-container
console.log(deckContainer);

//STEP:5 The remaining page elements were not coded in the deck.html. 
//Use JavaScript to add elements "document.CreateElement" and use "setAttributes" to assign classname and source.
//Created page mock up to determine type and number of elements to create

//Stopped and resume after session.





