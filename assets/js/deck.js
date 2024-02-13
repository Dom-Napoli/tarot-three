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

let container = document.querySelector(".container");
console.log(container);

//create an deck_id array
//loop cardObjects array and iterate for deck_id
//console.log results deck.html passed cards per specific deck_id
let deckPageObj = [];
for(let i = 0; i < cardObjects.length; i++){
if(cardObjects[i].deck_id === deckId) {
deckPageObj.push(cardObjects[i]);
    // console.log(cardObjects[i]);
    // console.log(cardObjects[i].image);
    // console.log(cardObjects[i].wtmeaning);
    // console.log(cardObjects[i].upright);
    // console.log(cardObjects[i].reverse);
    // console.log(cardObjects[i].copyright);
    // console.log(cardObjects[i].horoscope);
    // console.log(cardObjects[i].card_order);
    // console.log(cardObjects[i].alt_name);

    let deckContainer = document.createElement("div");
    // console.log(deckContainer);
        deckContainer.setAttribute("class", "deck-container"); 
    
    let cardImgDiv = document.createElement("div");
        cardImgDiv.setAttribute("class", "card-img-div");
        console.log(cardImgDiv); 
    }
}
// console.log(deckPageObj);

let cardBackImg = [];
for(let i = 0; i < decks.length; i++){
    if(decks[i].card_back === 3){
    cardBackImg.push(decks[i]);

let cardBackImage = document.createElement("img");
    cardBackImage.setAttribute("class", "card-back-img");
    cardBackImage.setAttribute("src", decks[i].card_back);
    console.log(cardBackImage);  
    }
}