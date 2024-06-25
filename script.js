function getComputerChoice() {
    let randomVal = Math.floor(Math.random() * 3);
    let computerChoice;
    switch (randomVal) {
        case 0:
            computerChoice == 'rock'
            break;
        case 1:
            computerChoice == 'paper'
            break;
        case 2:
            computerChoice == 'scissors'
            break;
        default:
            console.log("Must be equal to one out of the three choices");
    }
    return computerChoice;
}

function getHumanChoice() {
    let choice = prompt("Let's play a quick fun game! Write down one of the following choices below:\n'Rock', 'Paper', 'Scissors'");
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        alert("Oh no, you lost this round... Paper covers Rock")
        // increment computer score. show current scores
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        alert("Yay! Rock beats Scissors!")
        // increment human score. show current scores
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        alert("Yay! Paper beats Rock!")
        // increment human score. show current scores
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        alert("Oh no, you lost this round... Scissors cut paper")
        //increment computer score. show current scores
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        alert("Oh no, you lost this round... Rock crushes Scissors")
        //increment computer score. show scores
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        alert("Yay! Scissors beats Paper!")
        //increment human score. show scores
    }
    else {
        alert("It's a draw!")
        //just show scores
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

}