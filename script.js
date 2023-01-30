let playerScore = 0;
let computerScore = 0;
const playerSelection = 'rock'.toLowerCase();

let playerData = 0;
let computerData = 0;
//variable for availabe choices
const items = ['rock', 'paper', 'scissors'];

//randomizer
function getComputerChoice() {
    return items[Math.floor(Math.random()*items.length)];

};
const computerSelection = getComputerChoice();

//comparer
function playRound(playerSelection, computerSelection) {
    for (let i = 0; i <= 5; i++){
    if(playerSelection == computerSelection) {
        return "It's a draw !"
    }
    else if(playerSelection == 'rock') {
        if(computerSelection == 'paper'){
        computerScore++;
        return "Comp won"
        }else{
            playerScore++;
            return 'Player won'
        }
    }
    else if(playerSelection == 'scissors') {
        if(computerSelection == 'rock') {
            computerScore++;
            return "Comp won"
        }else{
            playerScore++;
            return 'Player won'
        }
    }
    else if(playerSelection = 'paper'){
        if(computerSelection == 'scissors'){
            computerScore++;
            return 'Comp won'
        }else{
            playerScore++;
            return 'Player won'
        }
    }
}
}

function game() {
    for (let i = 0; i <= 5; i++) {
        playRound()
        if(playRound() == "Player won"){
            return playerData++;
        }else if(playRound() == "Comp won"){
            return computerData++;
        }else{
            break;
        }

    }
}

console.log(game())

console.log('Play result:  ' + playRound(playerSelection, computerSelection));




console.log('Play score: ' + playerScore, computerScore)