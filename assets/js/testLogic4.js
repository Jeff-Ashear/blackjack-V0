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
let remainingCards = 52

$("#startBtn").click(function (arr, arr) {
  deck = deckOfCards;

  console.log(deck)
  return gameLogic(deck)
});

let cardsDrawn = 0;
let thisCard = ""

$("#drawBtn").click(function() {
  gameLogic(deck)
})

function gameLogic(deck, num, card, num) {
  let localDeck = deckOfCards
  console.log(localDeck)
  if (cardsDrawn < 6) {
    cardsDrawn = cardsDrawn + 1
    let indecks = Math.floor(Math.random() * remainingCards)
    thisCard = localDeck[indecks]
    console.log(thisCard)
    
  }
}