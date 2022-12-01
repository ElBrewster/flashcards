// const Card = require("./Card");
// const Deck = require("./Deck");
const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
        this.currentRecord = 0;
    }

    returnCurrentCard() {
        return this.deck.cards[0];
    }

    takeTurn(guess, card) {
        let newTurn = new Turn(guess, card);
        let shiftedCard = this.deck.cards.shift();
        // let newGuess = newTurn.returnGuess();
        // let guessEvaluation = newTurn.evaluateGuess();
        this.turns++;
        if (newTurn.evaluateGuess()) {
            return newTurn.giveFeedback();
        } else if (!newTurn.evaluateGuess()) { 
            this.incorrectGuesses.push(shiftedCard.id);
            return newTurn.giveFeedback();
        }
        console.log(this.incorrectGuesses);
    }

    calculatePercentCorrect() {
        let percentCorrect = (this.incorrectGuesses.length / this.turns) * 100;
        let fixedPercent = percentCorrect.toFixed(0);
        this.currentRecord = fixedPercent
        return fixedPercent;
    }

    endRound() {
        return `**Round over!**You answerd ${this.currentRecord}% of the questions correctly!`;
    }
}

module.exports = Round;