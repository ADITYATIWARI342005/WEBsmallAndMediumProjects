

const words = ['javascript', 'programming', 'hangman', 'developer', 'openai', 'react' , 'node', 'express'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let remainingAttempts = 6;




function setWinBackgroundColor() {
  document.body.style.backgroundColor = 'green';
}

function setLossBackgroundColor() {
  document.body.style.backgroundColor = 'red';
}


function checkWin() {
 
    wordDisplay.textContent = 'Congratulations! You won!';


  
}

function checkLoss() {

    wordDisplay.textContent = 'Game over! You lost.';
 
  
}

