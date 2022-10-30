const fs = require('fs');
var deck = require('./deck.json')
// must perform the rules of a game of blackjack


// set the board
    // establish a deck
    let remainingCards = 51
    function deckTester(arr) {
        let indecks = Math.floor(Math.random() * remainingCards)
        remainingCards = remainingCards - 1
        let card = deck.deck[indecks]
        console.log(card)
    }
    console.log(deckTester(deck))
    
    //shuffle deck
    // score = 0

// start the game
    //deal:
        // player gets card 0 face up
        //dealer gets card 1 face up
        //player gets card 2 face up
        //dealer gets card 2 face down
    // check for naturals
        //if the player has a natural the player wins
        //if the dealer has a natural and the player doesn't, the player loses
         //if no naturals are present then the player can choose to hit or stand
            // if the player stands the dealer chooses to hit or stand
            //if the player chooses