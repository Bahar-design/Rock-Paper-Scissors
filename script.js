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