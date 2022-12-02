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
    let guess3;
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
        guess3 = "accessor method";
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

    it('should have a method that updates the this.turns property, (and instantiates a new Turn, evaluates guesses, gives feedback, and stores ids of incorrect guesses in the incorrect guesses array)', () => {
        round.takeTurn(guess1, card1);
        expect(round.turns).to.equal(1);
    });

    
    it('should use takeTurn() method so that the next card becomes the current card', () => {
        let cardArray1less = deck.cards.shift();

        expect(cardArray1less).to.be.equal(card1);
    });
    
    it('should use the takeTurn() method to evaluate guesses and store card id on an an incorrect guess', () => {
        let cardArray1less = deck.cards.shift();

        turn.returnGuess(); 
        turn.evaluateGuess();
        turn2.returnGuess();
        turn2.evaluateGuess();
        round.incorrectGuesses.push(cardArray1less.id);

        expect(cardArray1less.id).to.be.equal(card1.id);
   
    });

    it('should use takeTurn() method to give feedback after evaluating guess', () => {
        expect(round.takeTurn(guess2, card1)).to.equal('incorrect!');
        expect(round.takeTurn(guess1, card1)).to.equal('correct!');

    });

    it('should have a method to calculate percent of questions the user got correct', () => {
        let round2 = new Round(deck);
        round2.takeTurn(guess2, card1);
        round2.takeTurn(guess2, card2);
        console.log(round2.takeTurn(guess3, card3));
 
        let percentCorrect = (round2.incorrectGuesses.length / round2.turns) * 100;
        let fixedPercent = percentCorrect.toFixed(0);

        expect(percentCorrect).to.be.finite;
    })

    it('should have a method to print an end of round message from currentRecord property (the storage for calculate percent)', () => {
        let round2 = new Round(deck);
        round2.takeTurn(guess2, card1);
        round2.takeTurn(guess2, card2);
        round2.takeTurn(guess3, card3);
 
        let percentCorrect = (round2.incorrectGuesses.length / round2.turns) * 100;
        let fixedPercent = percentCorrect.toFixed(0);
        let endRoundMsg = `**Round over!**You answerd ${fixedPercent}% of the questions correctly!`;
        round2.calculatePercentCorrect();
        round2.endRound();

        expect(endRoundMsg).to.be.a('string');
    })
    //endRound(); prints the following: '**Round over!**You answerd<>% of the questions correctly!'
})