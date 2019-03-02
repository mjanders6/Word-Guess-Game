var word2 = 'Hello World'
var res = word2.split("")
var lookup = word2.indexOf("l")

// document.getElementById("myTest").innerHTML = res

document.onkeydown = ({ key }) => {
    document.getElementById("myTest").innerHTML = key
    showObj.guessArr.push(key)
  };