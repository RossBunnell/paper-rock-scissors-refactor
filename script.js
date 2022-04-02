let computerScore = 0;
let playerScore = 0;
const choices = ["paper", "rock", "scissors"];
let player;
let computer;
let resultContainer = document.getElementById('current-game-results');
let myScore = document.getElementById('player-score');
let pcScore = document.getElementById('computer-score')

/* Computer Selection */

const computerChoice = function() {
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
};

/* Player Selection */

const rock = document.querySelector("#rock");
rock.addEventListener("click", function() {
    player = "rock";
    computer = computerChoice();
    return game(player, computer);
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", function() {
    player = "paper";
    computer = computerChoice();
    return game(player, computer);
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", function() {
    player = "scissors";
    computer = computerChoice();
    return game(player, computer);
});

/* Playing a round */

function game(player, computer) {
    if (player === computer) {
        resultContainer.textContent = `You both picked ${player}!   It's a tie!`
    } else if (computer === 'rock' && player === 'scissors' || computer === 'scissors' && player === 'paper' || computer === 'paper' && player === 'rock') {
        computerScore++
        pcScore.textContent = computerScore;
        resultContainer.textContent = `You picked ${player} and the computer picked ${computer}, you lose!`
        if (computerScore === 5) {
            alert("GAME OVER - The Computer Won!")
            computerScore = 0;
            pcScore.textContent = computerScore;
            playerScore = 0;
            myScore.textContent = playerScore;
            resultContainer.textContent = 'Choose Rock, Paper, Or Scissors!'
        } else {
            return;
        }
    } else {
        playerScore++
        myScore.textContent = playerScore;
        resultContainer.textContent = `You picked ${player} and the computer picked ${computer}, you win!`
        if (playerScore === 5) {
            alert("GAME OVER - You Won!")
            playerScore = 0;
            myScore.textContent = playerScore;
            computerScore = 0;
            pcScore.textContent = computerScore;
            resultContainer.textContent = 'Choose Rock, Paper, Or Scissors!'
        } else {
            return;
        }

    }

}