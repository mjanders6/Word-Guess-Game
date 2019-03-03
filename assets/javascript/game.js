// Initialize variables 
let word = 'anderson'
const numGuesses = word.length
let guesses = []
let guessesLeft
let winTotal = []
let lossTotal = []
let showWord = []

// create a constant to sum the 1's for the correct guesses
const wins = ga => ga.reduce((a, b) => a + b, 0)

// Object to hold the information
let showObj = {
    word: word,
    guessLen() {
        // length of word
        return this.word.length
    },
    guessArr: guesses,
    guessLeft() {
        // guesses left
        return this.guessLen() - this.guessArr.length
    },
    // showWordArr() {
    //     for (let i = 0; i < this.guessLen(); i++) {
    //         if (this.word.match(this.guessArr[i])) {
    //             let thing = document.createElement('span')
    //             document.querySelector('#myDiv').append(thing)
    //             thing.textContent = this.guessArr[i]
    //         } else {
                
    //         }
    //     }
    // },
    wins: winTotal,
    losses: lossTotal
}

document.getElementById("guessLeft").innerHTML = 'Guesses Left: ' + showObj.guessLeft();

for (let i =0; i < showObj.guessLen(); i++) {
    let thing = document.createElement('span')
    thing.textContent = ' _ ' // str[i]
    document.querySelector('#myDiv').append(thing)
}

// wins and losses 
winTotal = wins(guesses)
lossTotal = guesses.length - winTotal

document.onkeydown = ({ keyCode, key }) => {
    if (keyCode >= 65 && keyCode <= 90) {
        // save the letters pressed
        showObj.guessArr.push(key)
        // showObj.showWordArr()
    }
    document.getElementById("guessLeft").innerHTML = 'Guesses Left: ' + showObj.guessLeft();



};


