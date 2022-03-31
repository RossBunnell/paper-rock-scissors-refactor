const computerScore = 0;
const playerScore = 0;
const choices = ['paper', 'rock', 'scissors'];

/* Computer Selection */

const computerChoice = function() {
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

/* Player Selection */

const rock = document.querySelector('#rock');
rock.addEventListener('click', rockChoice);

const paper = document.querySelector('#paper');
paper.addEventListener('click', paperChoice);

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', scissorsChoice);

function rockChoice() {
    return 'rock';
}

function paperChoice() {
    return 'paper';
}

function scissorsChoice() {
    return 'scissors'
}

/* Play Game */