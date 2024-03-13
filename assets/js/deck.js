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

    //create div for card container
    let cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card-container");
    console.log(cardContainer);

    //ceate div for card image
    let picDiv = document.createElement("div");
    picDiv.setAttribute("class", "pic-div");
    console.log(picDiv);

    let cardBack;
    for (let i = 0; i < decks.length; i++){
    if(decks[i].deck_id === decks.card_back){
        cardBack = decks[i];
    }
    console.log(cardBack)
}
    
    let imgBack = document.createElement("img");
    imgBack.setAttribute("class", "img-back");
    imgBack.setAttribute("src", decks[i]);
    console.log(imgBack);
}
}
console.log(deckPageObj);