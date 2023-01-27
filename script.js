let playerScore = 0;
let computerScore = 0;

//variable for availabe choices
const items = ['rock', 'paper', 'scissors'];

//randomizer
function getComputerChoice() {
    return items[Math.floor(Math.random()*items.length)];    

};

//comparer
function playRound(playerSelection, computerSelection) {
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


//function game() 
    for (let i = 0; i <= 5; i++) {
        console.log()
    }


const playerSelection = 'rock'.toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));




console.log(playerScore, computerScore)