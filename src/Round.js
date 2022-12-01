const Card = require("./Card");
const Deck = require("./Deck");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
        // console.log("here is my:", this.deck);
    }

    returnCurrentCard() {
        // console.log("In my method:", this.deck.cards[0]);
        return this.deck.cards[0];
    }
}
//takes in responses
//records guesses

module.exports = Round;