var fs = require('fs');
var deckOfCards = require('./deck.json');

let deck = deckOfCards.deck;

document.readyState(function(e, arr) {
    e.preventdefault()
    console.log(deck)
})






    $('#startBtn').click(function() {
        console.log(deckOfCards)
    })




