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


function game(playerchoice) {
    let computerSelection = '';
    let playerSelection = playerchoice
    computerSelection = computerPlay().trim().toLowerCase();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    return result;

}

// let playerSelection = '';

let rock = document.querySelector('#rock');
rock.addEventListener('click', function() {
    return game('rock');
})

let paper = document.querySelector('#paper');
paper.addEventListener('click', function() {
    return game('paper');
})

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function() {
    return game('scissors');
})