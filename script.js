 const body = document.querySelector('.results');
 const container = document.createElement('div');
 container.classList.add('result-container')
 body.appendChild(container);

 let rock = document.querySelector('#rock');
 rock.addEventListener('click', function() {
     return game('rock');
 }, );

 let paper = document.querySelector('#paper');
 paper.addEventListener('click', function() {
     return game('paper');
 });

 let scissors = document.querySelector('#scissors');
 scissors.addEventListener('click', function() {
     return game('scissors');
 });

 function game(playerchoice) {
     let computerSelection = '';
     let playerSelection = playerchoice
     computerSelection = computerPlay().trim().toLowerCase();
     let result = playRound(playerSelection, computerSelection);
     //console.log(result);
     return result;
 }

 function computerPlay() {
     let options = ['rock', 'paper', 'scissors'];
     computerChoice = Math.floor(Math.random() * 3);
     return options[computerChoice];
 };

 function playRound(playerSelection, computerSelection) {
     if (playerSelection === computerSelection) {
         return tie(playerSelection, computerSelection);
     } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
         return loser(playerSelection, computerSelection);
     } else {
         return winner(playerSelection, computerSelection);
     }
 };

 function winner(playerSelection, computerSelection) {
     const winner = document.querySelector('.result-container');
     console.log(winner);
     const winningComment = document.createElement('div');
     winningComment.classList.add('.result');
     winningComment.innerText = `You picked ${playerSelection}, computer picked ${computerSelection}, you win!`;
     winner.appendChild(winningComment);

     winningComment.remove();
 };

 function loser(playerSelection, computerSelection) {
     const loser = document.querySelector('.result-container');
     const losingComment = document.createElement('div');
     losingComment.classList.add('.result');
     losingComment.innerText = `You picked ${playerSelection}, computer picked ${computerSelection}, you lose!`;
     loser.appendChild(losingComment);
 };

 function tie(playerSelection, computerSelection) {
     const tie = document.querySelector('.result-container');
     const tyingComment = document.createElement('div');
     tyingComment.classList.add('.result');
     tyingComment.innerText = `You picked ${playerSelection}, computer picked ${computerSelection}, it's a tie!`;
     tie.appendChild(tyingComment);
 };