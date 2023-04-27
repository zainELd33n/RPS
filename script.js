//Declarations
let inputs = document.querySelector(".inputs");
let playerDisplay = document.querySelector("#pCountNum");
let compDisplay = document.querySelector("#cCountNum");
// let roundDisplay
let round = 0;
let count = 0;
let playerScore = 1;
let compScore = 1;
const items = ['rock', 'paper', 'scissors'];

//Computer's randomized choice
let compChoice;
inputs.addEventListener('pointerdown', () => {
    compChoice = items[Math.floor(Math.random()*items.length)];
});


//Listener for the input of the player
let playerChoice = inputs.addEventListener('pointerdown', (e) => {
        const target = e.target;
        const choice = target.dataset.item;
        console.log(` choice: ${choice}, compChoice: ${compChoice}`);
        //^ To make sure the logic works
        let checker = gameLogic(choice, compChoice);
        console.log(checker);
});

//Comparing logic
 function gameLogic(a,b) {
    if(a === 'rock' && b === 'rock' || a === 'paper' && b === 'paper' || a === 'scissors' && b === 'scissors') {
        return 'Draw, No points';
    }
    else if (a === 'rock' && b === 'scissors') {
        playerAddition();
        playerScore++;
        return 'Player Won !';
        
    }
    else if (a === 'paper' && b === 'rock') {
        playerAddition();
        playerScore++;
        return 'Player Won !';
    }
    else if (a === 'scissors' && b === 'paper') {
        playerAddition();
        playerScore++;
        return 'Player Won !';
        
    }
    else {
        compAddition();
        compScore++;
        return 'Computer Won !';
    }
};

//Scoring system
function playerAddition() {
    playerDisplay.innerHTML = playerScore;
};
function compAddition() {
    compDisplay.innerHTML = compScore;
};

//Testing area

