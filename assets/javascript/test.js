var word2 = 'Hello World'
var res = word2.split("")
var lookup = word2.indexOf("l")


let showObj = {
  word: word,
  guessLen: numGuesses,
  guessArr: guesses,
  guessArrLen = this.guessArr.length,
  guessLeft () {
    let guessLeft = this.guessLen - this.guessArrLen
  },
  wins: winTotal,
  losses: lossTotal,

}



// // document.getElementById("myTest").innerHTML = res
// document.onkeydown = ({ key }) => {
//     document.getElementById("myTest").innerHTML = key
//     showObj.guessArr.push(key)
//   };