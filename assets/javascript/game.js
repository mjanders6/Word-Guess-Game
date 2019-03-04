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

for (let i = 0; i < word.length; i++) {
    showWord[i] = " _ "
}

// Object to hold the information
let showObj = {
    word: word.split(""),
    guessLen() {
        // length of word
        return this.word.length
    },
    guessArr: guesses,
    guessLeft() {
        // guesses left
        return this.guessLen() - this.guessArr.length
    },
    showWordArr(event) {
        for (let i = 0; i < this.guessArr.length; i++) {
            for (let j = 0; j < this.word.length; j++) {
                this.guessArr[i] === this.word[j] ? showWord[j] = this.guessArr[i] : '_'
            }
        }
        return showWord
    },
    wins: winTotal,
    losses: lossTotal
}

document.getElementById("guessLeft").innerHTML = 'Guesses Left: ' + showObj.guessLeft();

// wins and losses 
winTotal = wins(guesses)
lossTotal = guesses.length - winTotal

document.onkeydown = ({ keyCode, key }) => {
    if (keyCode >= 65 && keyCode <= 90) {
        // save the letters pressed
        showObj.guessArr.push(key)
        showObj.showWordArr(key)


    }
    document.getElementById("guessLeft").innerHTML = 'Guesses Left: ' + showObj.guessLeft();
    document.getElementById("lettersGuessed").innerHTML = 'Letters Guessed: ' + showObj.guessArr.join(", ");
    document.getElementById("lettersShow").innerHTML = 'Correct Letters: ' + showWord.join(" ");

};