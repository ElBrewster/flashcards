const Card = require("./Card");
const Deck = require("./Deck");
const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
        // console.log("here is my:", this.deck);
    }

    returnCurrentCard() {
        // console.log("In my method:", this.deck.cards[0]);
        //have deck.function();
        return this.deck.cards[0];
    }

    takeTurn(guess, card) {
        let newTurn = new Turn(guess, card);
        let shiftedCard = this.deck.cards.shift();
        let newGuess = newTurn.returnGuess();
        let guessEvaluation = newTurn.evaluateGuess();
        this.turns++;
        if (guessEvaluation) {
            
        }
    }
}
//takes in responses
//records guesses

module.exports = Round;