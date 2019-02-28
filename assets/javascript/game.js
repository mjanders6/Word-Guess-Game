// Initialize variables 
let word = 'rabbit'
let numGuesses = word.length
let guesses = [1, 0, 1, 0, 0]
let guessesLeft = word.length - guesses.length
let winTotal
let lossTotal

// create a constant to sum the 1's for the correct guesses
const wins = ga => ga.reduce( (a,b) => a+b, 0 )
// wins and losses 
winTotal = wins(guesses)
lossTotal = guesses.length - winTotal

// Object to hold the information
let showObj = {
    word: word,
    guessLen: numGuesses,
    guessArr: guesses,
    guessLeft: guessesLeft,
    wins: winTotal,
    losses: lossTotal
}

console.log(showObj);

document.getElementById("update").innerHTML = 'Wins: ' + showObj.wins;


let str = 'hotdog'

for (let i =0; i < str.length; i++) {
    let thing = document.createElement('span')
    thing.textContent = ' _ ' // str[i]
    document.querySelector('#myDiv').append(thing)
}