const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

//game.currentRound instantiates a new Round object
//game.start() method
    //creates Cards
    //puts Cards in a Deck
    //creates new Round with the Deck
    //calls printMessage (already written)
    //calls printQuestion (already written)