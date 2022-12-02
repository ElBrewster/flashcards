const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
// const Turn = require('../src/Turn');
const Card = require('../src/Card');

class Game {
  constructor() {
    this.currentRound;
    this.cards;
    this.deck;
  }
  
  start() {
    this.makeCards();
    this.makeDeck();
    this.makeRound();
    this.printMessage(this.deck);
    this.printQuestion(this.currentRound);
  }
  
  makeCards() {
    this.cards = prototypeQuestions.map(element => element = new Card(element.id, element.question, element.answers, element.correctAnswer));
  }

  makeDeck() {
    this.deck = new Deck(this.cards);
  }

  makeRound() {
    this.currentRound = new Round(this.deck);
  }



  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;