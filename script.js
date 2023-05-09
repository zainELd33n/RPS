//Declarations
let inputs = document.querySelector(".inputs");

let playerDisplay = document.querySelector("#pCountNum");
let compDisplay = document.querySelector("#cCountNum");
let roundInfo = document.querySelector("#roundInfo");
let roundDisplay = document.querySelector("#rCountNum");

let round = 1;
let count = 0;
let playerScore = 1;
let compScore = 1;
const items = ['rock', 'paper', 'scissors', 'rock', 'paper', 'scissors'];

function roundLogic() {}
//Listener for the input of the player
inputs.addEventListener('pointerdown', (e) => {
    const target = e.target;
    const playerChoice = target.dataset.item;
    if(playerChoice != undefined){
        compChoice = items[Math.floor(Math.random()*items.length)];
        gameLogic(playerChoice, compChoice);
        roundInfo.innerHTML = `Player chose ${playerChoice} and Computer chose ${compChoice}`;
        console.log(` choice: ${playerChoice}, compChoice: ${compChoice}`);
    }
});
//Comparing logic
function gameLogic(a, b) {
    if(a != undefined){
        if(a === 'rock' && b === 'rock' || a === 'paper' && b === 'paper' || a === 'scissors' && b === 'scissors') {
            roundAddition();
            round++;
            return 'Draw, No points';
        }
        if (a === 'rock' && b === 'scissors') {
            roundAddition();
            playerAddition();
            playerScore++;
            round++;
            return 'Player Won !';
        
        }
        if (a === 'paper' && b === 'rock') {
            roundAddition();
            playerAddition();
            playerScore++;
            round++;
            return 'Player Won !';
        }
        if (a === 'scissors' && b === 'paper') {
            roundAddition();
            playerAddition();
            playerScore++;
            round++;
            return 'Player Won !';
        
        } else {
            roundAddition();
            compAddition();
            compScore++;
            round++;
            return 'Computer Won !';
        }
    };
    console.log('no choice')
};

//Scoring system
function playerAddition() {
    playerDisplay.innerHTML = playerScore;
};
function compAddition() {
    compDisplay.innerHTML = compScore;
};

//Testing area
function roundAddition() {
    roundDisplay.innerHTML = round;
}