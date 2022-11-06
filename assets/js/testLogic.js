const deckOfCards = [
  "Ace of Spades",
  "Ace of Clubs",
  "Ace of Hearts",
  "Ace of Diamonds",
  "Two of Spades",
  "Two of Clubs",
  "Two of Hearts",
  "Two of Diamonds",
  "Three of Spades",
  "Three of Clubs",
  "Three of Hearts",
  "Three of Diamonds",
  "Four of Spades",
  "Four of Clubs",
  "Four of Hearts",
  "Four of Diamonds",
  "Five of Spades",
  "Five of Clubs",
  "Five of Hearts",
  "Five of Diamonds",
  "Six of Spades",
  "Six of Clubs",
  "Six of Hearts",
  "Six of Diamonds",
  "Seven of Spades",
  "Seven of Clubs",
  "Seven of Hearts",
  "Seven of Diamonds",
  "Eight of Spades",
  "Eight of Clubs",
  "Eight of Hearts",
  "Eight of Diamonds",
  "Nine of Spades",
  "Nine of Clubs",
  "Nine of Hearts",
  "Nine of Diamonds",
  "Ten of Spades",
  "Ten of Clubss",
  "Ten of Hearts",
  "Ten of Diamonds",
  "Jack of Spades",
  "Jack of Club",
  "Jack of Hearts",
  "Jack of Diamonds",
  "Queen of Spades",
  "Queen of Clubs",
  "Queen of Hearts",
  "Queen of Diamonds",
  "King of Spades",
  "King of Clubs",
  "King of Hearts",
  "King of Diamonds",
];
let deck = [];
let go = false;

$("#startBtn").click(function (arr) {
  // deck = deckOfCards;
  $("#cardDrawn").html("Deck Reshuffled");
  go = true;
  deck = deckOfCards;
  console.log(deck);
  gameLoop(deck, go)
});

function gameLoop(e, deck, bool) {
  $("#drawBtn").click(function (e, deck) {
    e.preventDefault();
    let localDeck = deck
    console.log(localDeck)
    // if (go == false) {
    //    $('#cardDrawn').html('Click Start')
    // } else {
    //     $('#cardDrawn').html('clicked')
    //     // card = deck[Math.floor(Math.random() * deck.length)]
    //     console.log(deck)
    // }
  });
}
