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
        game = new Game(deck);

    })
    it('should be a function', () => {
        expect(Game).to.be.a('function');
    });

    it('should have a property that sets up an empty object the current Round', () => {
        expect(game.currentRound).to.be.an.instanceof(Object);

    });

    // it('should have a property that sets up an empty array for the cards', () => {
    //     expect(game.cards).to.be.an.instanceof(Array); to.be.a.property

    // });

    // it('should have a property that sets up an empty object for the deck', () => {
    //     expect(game.cards).to.be.an.instanceof(Object);

    // });

    it('should have a method that makes cards', () => {
        const cardSet = cardArray.map(element => element = new Card(element.id, element.question, element.answers, element.correctAnswer));
        console.log(cardSet);
        expect(cardSet[0]).to.equal(cardArray[0]);
        game.makeCards();
        // console.log("in test", game.cards);
        

    })
})

//game.currentRound instantiates a new Round object
//game.start() method
    //creates Cards
    //puts Cards in a Deck
    //creates new Round with the Deck
    //calls printMessage (already written)
    //calls printQuestion (already written)
    // this.cards = prototypeQuestions.map(element => {
        // const id = element.id;
        // console.log(id);
        // const question = element.question;
        // const answers = element.answers;
        // const correctAnswer = element.correctAnswer;
        // return element = new Card(element.id, element.question, element.answers, element.correctAnswer);