const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Game', function() {
    let game;
    let round;
    let deck;
    let cardArray;
    let card1;
    let card2;
    let card3;
    beforeEach( function () {
        card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        card2 = new Card(2, "What is a comma-separated list of related values?",  ["array", "object", "function"], "array");
        card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        cardArray = [card1, card2, card3];
        deck = new Deck(cardArray);
        round = new Round(deck);
        game = new Game(deck);

    })
    it('should be a function', () => {
        expect(Game).to.be.a('function');
    });

    it('should have a property that instantiates a new Round object', () => {
        expect(game.round).to.be.an.instanceof(Round);

    })
})

//game.currentRound instantiates a new Round object
//game.start() method
    //creates Cards
    //puts Cards in a Deck
    //creates new Round with the Deck
    //calls printMessage (already written)
    //calls printQuestion (already written)