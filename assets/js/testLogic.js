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
  "Ten of Clubs",
  "Ten of Hearts",
  "Ten of Diamonds",
  "Jack of Spades",
  "Jack of Clubs",
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

  for (let i = 0; i <= 5; ++i) {
    let thisCard = "#" + i
    if (i % 2 == 0) {
      $(thisCard).html('Player Card')
    } else {
      $(thisCard).html('Dealer Card')
    }
  }

  playerScore = 0
  dealerScore = 0
  cardsDrawn = 0

  $('#playerScore').html(playerScore)
  $('#dealerScore').html(dealerScore)

  console.log(deck)
  return deck
});

let cardsDrawn = 0;
let thisCard = ""
let dealerScore = 0
let playerScore = 0

$("#drawBtn").click(function() {
  gameLogic(deck)
  setTimeout(function() {
    gameLogic(deck)
  }, 1500)
})

function gameLogic(deck, num, card, num) {
  let localDeck = deckOfCards
  let dealOrder = "#"
  if (cardsDrawn < 6 && dealerScore < 21 && playerScore < 21) {
    let indecks = Math.floor(Math.random() * remainingCards)
    thisCard = localDeck[indecks]
    dealOrder = dealOrder + cardsDrawn
    console.log(dealOrder) 
    $(dealOrder).html(thisCard)  
    cardsDrawn++

    let cardValue = 0
    for (let i = 0; i < deckOfCards.length; ++i) {
      if (thisCard === deckOfCards[i]) {
        if (cardsDrawn % 2 == 0) {
          cardValue = Math.ceil((i + 1) / 4)
          dealerScore += cardValue
          $('#dealerScore').html(dealerScore)
        } else {
          cardValue = Math.ceil((i + 1) / 4)
          playerScore += cardValue
          $('#playerScore').html(playerScore)
        }
      }
    }
  } else if (playerScore > 21) {
    alert("Bust! You Lose.  Better luck next time.")
  }
}