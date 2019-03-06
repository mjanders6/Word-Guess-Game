# 1. Word-Guess-Game

## 1.1. About

This game was created to test your skills in guessing a random word. The goal is guess the letters to the word with no room to fail. 

## 1.2. Design 
The game is designed using javascript. Object `showObj` was created to hold arrays and functions to be used within the `onKeyDown` click event. The game keeps track of the following:

* Wins
* Guesses Left
* Letters Pressed
* Showing of the Correct Letters Pressed

If all of the letters are correctly guessed, then you will win. If you miss a letter, you will loose. 