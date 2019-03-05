// Initialize variables 
let word = 'anderson'
const numGuesses = word.length
let guesses = []
let guessesLeft
let winLossCount = []
let showWord = []

// create a constant to sum the 1's for the correct guesses
const winSum = ga => ga.reduce((a, b) => a + b, 0)

for (let i = 0; i < word.length; i++) {
    showWord[i] = " _ "
}

// Object to hold the information
let showObj = {
    word: word.split(""),
    wordDash() {
        for (let i = 0; i < word.length; i++) {
            showWord[i] = " _ "
        }
        return showWord
    },
    guessLen() {
        // length of word
        return this.word.length
    },
    guessArr: guesses,
    guessLeft() {
        // guesses left
        let gsLeft = this.guessLen() - this.guessArr.length
        return gsLeft
    },
    showWordArr(event) {
        for (let i = 0; i < this.guessArr.length; i++) {
            for (let j = 0; j < this.word.length; j++) {
                this.guessArr[i] === this.word[j] ? showWord[j] = this.guessArr[i] : '_'
            }
        }
        return showWord
    },
    wins() {
        if (this.guessLeft() === 0) {
            if (showWord.indexOf(" _ ") === -1) {
                console.log('you won');
                winLossCount.push(1);
            } else {
                console.log('you lost');
                winLossCount.push(0);
            }
        } else {
            return
        }
        return winSum(winLossCount)
    },
    clearPage() {
        document.getElementById("guessLeft").innerHTML = 'Guesses Left: ' + showObj.guessLeft();
        document.getElementById("lettersGuessed").innerHTML = 'Letters Guessed: ' + '';
        this.guessArr = []
        this.wordDash()
        document.getElementById("lettersShow").innerHTML = 'Correct Letters: ' + '';
    }
}

document.getElementById("guessLeft").innerHTML = 'Guesses Left: ' + showObj.guessLeft();


document.onkeydown = ({ keyCode, key }) => {
    if (keyCode >= 65 && keyCode <= 90) {
        // save the letters pressed
        showObj.guessArr.push(key)
    }
    showObj.showWordArr(key)
    showObj.wins()
    
    if (showObj.guessLeft() > 0) {
        document.getElementById("guessLeft").innerHTML = 'Guesses Left: ' + showObj.guessLeft();
        document.getElementById("lettersGuessed").innerHTML = 'Letters Guessed: ' + showObj.guessArr.join(", ");
        document.getElementById("lettersShow").innerHTML = 'Correct Letters: ' + showWord.join(" ");
        document.getElementById("wins").innerHTML = 'Wins: ' + winSum(winLossCount);
    } else {
        showObj.clearPage()
    }
};