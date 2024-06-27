function getComputerChoice() {
    let randomVal = Math.floor(Math.random() * 3);
    let computerChoice;
    switch (randomVal) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
        default:
            console.log("Must be equal to one out of the three choices");
    }
    return computerChoice;
}

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const totalPlay = 5;

function playRound(humanChoice, computerChoice) {
    roundCount++;
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        alert(`Oh no, you lost this round... Paper covers Rock\nComputer: ${computerScore} You: ${humanScore}`);
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        alert(`Yay! Rock beats Scissors!\nComputer: ${computerScore} You: ${humanScore}`);
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        alert(`Yay! Paper beats Rock!\nComputer: ${computerScore} You: ${humanScore}`);
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        alert(`Oh no, you lost this round... Scissors cut paper\nComputer: ${computerScore} You: ${humanScore}`);
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        alert(`Oh no, you lost this round... Rock crushes Scissors\nComputer: ${computerScore} You: ${humanScore}`);
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        alert(`Yay! Scissors beats Paper!\nComputer: ${computerScore} You: ${humanScore}`);
    }
    else {
        alert(`It's a draw!\nComputer: ${computerScore} You: ${humanScore}`);
    }

    if (roundCount === totalPlay) {
        finalResult();
    }
}

function finalResult() {
    if (humanScore > computerScore) {
        alert(`Yay! You won the game with a score of ${humanScore} against ${computerScore}!`);
    }
    else if (humanScore < computerScore) {
        alert(`Oh no! The computer won with a score of ${computerScore} against your score of ${humanScore}...`);
    }
    else {
        alert(`It ended in a tie of ${humanScore} : ${computerScore} . Better luck next time!`);
    }
    resetGame();
}

function resetGame () {
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
}

let rock = document.querySelector("#r");
let paper = document.querySelector("#p");
let scissors = document.querySelector("#s")

rock.addEventListener("click", () => {
    computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
});
paper.addEventListener("click", () => {
    computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
});
scissors.addEventListener("click", () => {
    computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
});