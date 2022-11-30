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
    // let turn;
    beforeEach(function() {
        console.log('Starting Round...');
        card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        card2 = new Card(2, "What is a comma-separated list of related values?",  ["array", "object", "function"], "array");
        card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        cardArray = [card1, card2, card3];
        deck = new Deck(cardArray);
        round = new Round(deck);
        // turn = new Turn();
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
        let methodVar = round.returnCurrentCard();
        expect(methodVar).to.equal(round.deck.cards[0]);
        // console.log("test:", round.deck.cards[0]);
        expect(round.deck.cards[0]).to.equal(card1);

    })
    // it('should have a property that stores an instance of Turn', () => {

    // });

    //takeTurn(); updates 'turns' count, evaluates guesses, gives feedback, stores ids of incorrect guesses
        //instantiates a new turn to access...?(yes)
    //calculatePercentCorrect(); calculates and returns the percentage of correct guesses
    //endRound(); prints the following: '**Round over!**You answerd<>% of the questions correctly!'
})