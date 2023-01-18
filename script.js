//variable for availabe
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
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

console.log(playerSelection, computerSelection);
