const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Round', function() {
    let card1;
    let card2;
    let card3;
    let cardArray;
    let deck;
    let round;
    let guess1;
    let guess2;
    let turn;
    let turn2;
    beforeEach(function() {
        // console.log('Starting Round...');
        card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        card2 = new Card(2, "What is a comma-separated list of related values?",  ["array", "object", "function"], "array");
        card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        cardArray = [card1, card2, card3];
        deck = new Deck(cardArray);
        round = new Round(deck);
        guess1 = "object";
        guess2 = "array";
        turn = new Turn(guess1, card1);
        turn2 = new Turn(guess2, card1);
    });

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    });


    it('should instantiate our good friend Round', () => {
        expect(round).to.be.an.instanceof(Round);
    });

    it('should have a property that stores an instance of a Deck', () => {
        expect(round.deck).to.be.an.instanceof(Deck);
        expect(round.deck.cards).to.have.deep.members([card1, card2, card3]);
    });

    it('should have a method that returns the current card being played', () => {
        let method1 = round.returnCurrentCard();
        let firstCard = round.deck.cards[0];
        expect(method1).to.equal(round.deck.cards[0]);
        // console.log("test:", round.deck.cards[0]);
        // expect(round.deck.cards[0]).to.equal(card1);
        expect(firstCard).to.equal(card1);

    });

    it('should have a property that counts the number of turns', () => {
        expect(round.turns).to.be.finite;
    });

    it('should have a property that stores the number of incorrectGuesses in an array', () => {
        expect(round.incorrectGuesses).to.be.an.instanceof(Array);
    });

    it('should have a method that 1. updates the this.turns property, (and instantiates a new Turn, evaluates guesses, gives feedback, and stores ids of incorrect guesses in the incorrect guesses array)', () => {
        round.takeTurn(guess1, card1);
        expect(round.turns).to.equal(1);
    });

    it('should use the takeTurn() method to 2. evaluates guesses (gives feedback, and store ids of incorrect guesses in the incorrect guesses array)', () => {
        // console.log("For my takeTurn method:", turn);
        // console.log("For my takeTurn method:", turn2);
        turn.returnGuess(); 
        turn.evaluateGuess();
        turn2.returnGuess();
        console.log("For my takeTurn method:", turn);
        console.log("For my takeTurn method:", turn2);
        // console.log("TakeyourTurn!:", turn.giveFeedback()); 
   
    });

    it('should use takeTurn() method to give feedback', () => {

    });
    //takeTurn(); evaluates guesses, gives feedback, stores ids of incorrect guesses
        //instantiates a new turn to access...?(yes)
    //calculatePercentCorrect(); calculates and returns the percentage of correct guesses
    //endRound(); prints the following: '**Round over!**You answerd<>% of the questions correctly!'
})