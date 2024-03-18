//Search current location on browser 
const queryString = window.location.search;
console.log(queryString);

//Create object from query string
const urlParams = new URLSearchParams(queryString);
console.log(urlParams);

//Provides ability to fetch data
const deckId = parseInt(urlParams.get("deck"));
//console =  returns "number".
console.log(typeof deckId);

//confirm all arrays accessed
// console.log(decks);
// console.log(cards);
// console.log(cardObjects);

//VAR assigned a name to create a new array of objects contained in the data.js files (cards.js/ decks.js/ cardObjects.js). Cannot use current data.js file names or the contents will be overwritten and not accessible 
let selectedDeckObjects = []
//Loop through cardObjects and use additional VAR to loop through cards.js array to access the card name and suit and include them in the selectedDeckObjects array.
for (let i = 0; i < cardObjects.length; i++) {
    // console.log(cardObjects[i]);
    //CL results in all card objects accessed
    if(cardObjects[i].deck_id === deckId) {
        let cardData = cards.find(x => x.id === cardObjects[i].card_id);
        console.log(cardData);

        cardObjects[i].card_name = cardData.name;
        cardObjects[i].suit = cardData.suit;

        selectedDeckObjects.push(cardObjects[i]);
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
    if (decks[i].id === deckId) {
        selectedDeck = decks[i];
    }
}
//CL result confirmed
console.log(selectedDeck);

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





