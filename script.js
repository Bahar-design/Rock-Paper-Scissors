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
            console.log("Must be equal to one out of the three choices")
    }
    return computerChoice;
}
function getHumanChoice() {
    let choice = prompt("Let's play a quick fun game! Write down one of the following choices below:\n'Rock', 'Paper', 'Scissors'")
    return choice.toLowerCase()
}