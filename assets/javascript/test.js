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

// for (let i = 0; i < showObj.guessLen(); i++) {
//     let thing = document.createElement('span')
//     thing.textContent = ' _ ' // str[i]
//     document.querySelector('#myDiv').append(thing)
// }

// for (let i = 0; i < showObj.guessLen(); i++) {
//     if (word.indexOf("a") >= 0) {        
//         let thing = document.createElement('span')
//         thing.textContent = word[i]
//         document.querySelector('#myDiv').append(thing)
//     } else {
//         let thing = document.createElement('span')
//         thing.textContent = ' _ ' // str[i]
//         document.querySelector('#myDiv').append(thing)
//     }
// }

// // document.getElementById("myTest").innerHTML = res
// document.onkeydown = ({ key }) => {
//     document.getElementById("myTest").innerHTML = key
//     showObj.guessArr.push(key)
//   };