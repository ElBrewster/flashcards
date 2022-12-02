const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
        this.currentRecord = 0;
    }

    returnCurrentCard() {
        if(this.deck.countCards() === 0) {
            return false;
        } else {
            const currentestCard = this.deck.cards[0];
            return currentestCard;
        }
    }

    takeTurn(guess) {
        const aCard = this.returnCurrentCard();
        let newTurn = new Turn(guess, aCard);
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
        this.currentRecord = fixedPercent;
        return fixedPercent;
    }

    endRound() {
        let newPercentCorrect = this.calculatePercentCorrect();
        console.log(`**Round over!**You answerd ${newPercentCorrect}% of the questions correctly!`);
    }
}

module.exports = Round;