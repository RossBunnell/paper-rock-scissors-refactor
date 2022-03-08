/*Ask if they want to play the game
    If yes, ask player for paper, rock scissors choice
        If paper, rock, scissors, trim() then toLowerCase()
        else, "It seems you changed your mind"
    else "Maybe next time"

        configure computerchoice
        Math.floor(Math.random() * 3 + 1
  */
//function to generate computer choice

/*  player paper computer scissors
        player rock computer paper
        player scissors computer rock */

function computerPlay() {
    // declare an empty variable for the conditional statment to populate
    let computerChoice;
    let calculateChoice = Math.floor(Math.random() * 3);
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
    let confirmPlay = confirm("Would you like to play paper rock scissors?");
    computerSelection = computerPlay();
    if (confirmPlay) {
        let playerSelection = prompt("Please enter Rock, Paper, or Scissors")
            .trim()
            .toLowerCase();
        if (playerSelection === null) {
            alert("I see you changed your mind, see you next time");
        } else if (playerSelection === computerSelection) {
            return "Tie Game!";
        } else if (
            playerSelection === "paper" &&
            computerSelection === "scissors"
        ) {
            alert("You chose paper, the computer chose scissors.  The computer wins");
            return "You chose paper, the computer chose scissors.  The computer wins";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            alert("You chose rock, the computer chose paper.  The computer wins");
            return "You chose rock, the computer chose paper.  The computer wins";
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            alert("You chose scissors, the computer chose rock.  The computer wins");
            return "You chose scissors, the computer chose rock.  The computer wins";
        } else {
            alert(
                `You chose ${playerSelection}, the computer chose ${computerSelection}.   You win!`
            );
            return `You chose ${playerSelection}, the computer chose ${computerSelection}.   You win!`;
        }
    } else {
        alert("Maybe next time then");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}

// console.log(playRound(playerSelection, computerSelection));