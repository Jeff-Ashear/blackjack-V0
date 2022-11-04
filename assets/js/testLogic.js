var deckOfCards = {}
fetch('./assets/js/deck.json').then(response => deckOfCards = response.json())

fetch("./assets/js/deck.json")
    .then(response => {
        return response.json
    })
    .then(deck => console.log(deckOfCards))

// let deck = deckOfCards[2][0]






    $('#startBtn').click(function() {
        console.log(deckOfCards)
    })




