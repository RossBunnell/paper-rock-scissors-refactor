//function to generate computer choice
function computerPlay() {
  // declare an empty variable for the conditional statment to populate
  let computerChoice;
  //
  let calculateChoice = Math.floor(Math.random() * 3);
  // set computerChoice based on
  if (calculateChoice === 0) {
    computerChoice = "rock";
  } else if (calculateChoice === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  //tie condition
  if (playerSelection === computerSelection) {
    return "Tie Game!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose, paper beats rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win, rock beats scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win, paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose, scissors beats paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win, scissors beats paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose, rock beats scissors";
  } else {
    return "what";
  }
}

let computerSelection = computerPlay();
let playerSelection = prompt(
  "Please enter Rock, Paper, or Scissors"
).toLowerCase();

console.log(playRound(playerSelection, computerSelection));
