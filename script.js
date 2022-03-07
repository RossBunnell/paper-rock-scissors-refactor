/* Generate Computer Choice
Prompt for user choice (to lowercase)

*/



//function to generate computer choice
function computerPlay () {
    let computerChoice;
    let calculateChoice = Math.floor(Math.random() * 3);
    console.log(calculateChoice)
    if (calculateChoice === 0) {
        computerChoice = 'Rock';
    } else if (calculateChoice === 1) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors'
    }
    return computerChoice

}



function playRound (playerSelection, computerSelection, numberOfPlays) {


}

let computerSelection = computerPlay();
let playerSelection = prompt('Please enter Rock, Paper, or Scissors').toLowerCase();
