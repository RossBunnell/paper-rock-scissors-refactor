const computerScore = 0;
const playerScore = 0;
const choices = ["paper", "rock", "scissors"];
let player;
let computer;
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

function game(player, computer) {}



// const computerScore = 0;
// const playerScore = 0;

// /* Computer Selection */

// const computerChoice = function() {
//     const choices = ['paper', 'rock', 'scissors'];
//     const randomChoice = Math.floor(Math.random() * 3);
//     return choices[randomChoice];
// }

// /* Player Selection */

// const rock = document.querySelector('#rock');
// rock.addEventListener('click', function rockChoice() {
//     return game('rock');
// });

// const paper = document.querySelector('#paper');
// paper.addEventListener('click', function paperChoice() {
//     return game('paper');
// });

// const scissors = document.querySelector('#scissors');
// scissors.addEventListener('click', function scissorsChoice() {
//     return game('scissors');
// });

// /* Play Game */

// function game(playerChoice) {
//     let computer = computerChoice();
//     if (playerChoice === computer) {
//         console.log('tie')
//     }
// }