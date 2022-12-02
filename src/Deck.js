// const Card = require("./Card");

class Deck {
    constructor(cardArray){
        this.cards = cardArray;
        // this.size = cardArray.length;
    }

    countCards() {
        return this.cards.length;
    }
}

//array of Card objects
//number of Cards in the deck
module.exports = Deck;