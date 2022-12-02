const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
// const Turn = require('../src/Turn');
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
        game = new Game();

    })
    it('should be a function', () => {
        expect(Game).to.be.a('function');
    });

    it('should have a property that sets up the current Round', () => {
        expect(game.currentRound).to.be.a.property;

    });

    it('should have a property that represents the cards array', () => {
        expect(game.cards).to.be.a.property;

    });

    it('should have a property that represents the deck object', () => {
        expect(game.deck).to.be.a.property;

    });

    it('should have a method that makes cards', () => {
        const cardSet = cardArray.map(element => element = new Card(element.id, element.question, element.answers, element.correctAnswer));

        expect(cardSet).to.have.deep.members(cardArray);
    });

    it('should have a method to make a deck', () => {
        game.makeCards();
        game.makeDeck();

        expect(deck.cards).to.have.deep.members(cardArray);
        expect(game.deck).to.be.an.instanceOf(Object);
    });

    it('should have a method to make a round', () => {
        game.makeCards();
        game.makeDeck();
        game.makeRound(deck);
        console.log("methodtest:", game.currentRound.deck);
        expect(game.currentRound).to.be.an.instanceOf(Object);
        expect(game.currentRound.deck).to.be.an.instanceOf(Object);
    });

    it('should have a method that starts the game, instantiates cards, instantiates a deck, instantiates the current round, printsMessage and printsQuestion with these 5 helper functions', () => {
        
    });
})
