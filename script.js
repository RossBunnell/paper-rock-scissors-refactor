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

computerPlay();