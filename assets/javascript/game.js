// Initialize variables 
let word = 'Anderson'
let letter = []
const numGuesses = word.length
let guesses = []
let guessesLeft 
let winTotal
let lossTotal

// create a constant to sum the 1's for the correct guesses
const wins = ga => ga.reduce( (a,b) => a+b, 0 )

// Object to hold the information
let showObj = {
    word: word,
    guessLen: numGuesses,
    guessArr: guesses,
    guessLeft: guessesLeft,
    wins: winTotal,
    losses: lossTotal
}

document.onkeydown = ({ key }) => {
    showObj.guessArr.push(key)
    showObj.guessLeft = numGuesses - showObj.guessArr.length
};

// wins and losses 
winTotal = wins(guesses)
lossTotal = guesses.length - winTotal

document.getElementById("update").innerHTML = 'Wins: ' + showObj.wins;


let str = 'hotdog'

for (let i =0; i < showObj.word.length; i++) {
    let thing = document.createElement('span')
    thing.textContent = ' _ ' // str[i]
    document.querySelector('#myDiv').append(thing)
}