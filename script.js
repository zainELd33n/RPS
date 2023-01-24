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
        return "Comp won"
        }else{
            return 'Player won'
        }
    }
    else if(playerSelection == 'scissors') {
        if(computerSelection == 'rock') {
        return "Comp won"
        }else{
            return 'Player won'
        }
    }
    else if(playerSelection = 'paper'){
        if(computerSelection == 'scissors'){
            return 'Comp won'
        }else{
            return 'Player won'
        }
    }
}

const playerSelection = "rock".toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

console.log(playerSelection, computerSelection);
