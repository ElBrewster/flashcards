const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Round', function() {
    let deck;
    let card1;
    let card2;
    let card3;
    let cardArray;
    let round;
    // let turn;
    beforeEach(function() {
        console.log('Starting Round...');
        cardArray = [card1, card2, card3];
        card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        card2 = new Card(2, "What is a comma-separated list of related values?",  ["array", "object", "function"], "array");
        card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        deck = new Deck(cardArray);
        round = new Round();
        // turn = new Turn();
    });

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    });


    it('should instantiate our good friend Turn', () => {
        expect(round).to.be.an.instanceof(Round);
    });

    it('should have a property to identify the current card', () => {

    })
    //returnCurrentCard(); returns current card being played
    //takeTurn(); updates 'turns' count, evaluates guesses, gives feedback, stores ids of incorrect guesses
        //instantiates a new turn to access...?(yes)
    //calculatePercentCorrect(); calculates and returns the percentage of correct guesses
    //endRound(); prints the following: '**Round over!**You answerd<>% of the questions correctly!'
})