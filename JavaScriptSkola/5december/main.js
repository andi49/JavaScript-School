import _ from "https://cdn.jsdelivr.net/npm/underscore@1.13.7/underscore-esm-min.js ";
// console.log(_)

const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
const chars = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Kn', 'Q', 'K', 'A'];
const deck = [];

suits.forEach((suit )=>{
    console.log(suit);

    chars.forEach((char, i)=>{
        console.log(char, i+2);

        deck.push({
            suit: suit,
            char: char,
            value: i+2
        })
    })
})


const shuffledDeck = _.shuffle(deck);
console.log(shuffledDeck);

// rdm num from 10 => 100

const rand = _.random(10, 90)
console.log(rand)

/// Ta ut 5 random values från array "chars"

const randomSample = _.sample(chars, [5])

console.log(randomSample)


/// Ta bort nummer från en array

