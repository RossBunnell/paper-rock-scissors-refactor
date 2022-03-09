function computerPlay() {

    let options = ['rock', 'paper', 'scissors'];
    computerChoice = Math.floor(Math.random() * 3);

    return options[computerChoice];
};



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `You picked ${playerSelection}, computer picked ${computerSelection}, it's a tie!`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return `You picked ${playerSelection}, computer picked ${computerSelection}, you lose!`;
    } else if (playerSelection === 'paper' && computerSelection === 'sissors') {
        return `You picked ${playerSelection}, computer picked ${computerSelection}, you lose!`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You picked ${playerSelection}, computer picked ${computerSelection}, you lose!`;
    } else {
        return `You picked ${playerSelection}, computer picked ${computerSelection}, you win!`;
    }
}

function game() {
    let computerSelection = '';
    let playerSelection = prompt('Choose Paper, Rock or Scissors').trim().toLowerCase();
    computerSelection = computerPlay().trim().toLowerCase();
    let result = playRound(playerSelection, computerSelection);
    return result;
}