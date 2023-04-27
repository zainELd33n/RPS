//Declarations
let inputs = document.querySelector(".inputs");
let count = 0;
let playerScore = 0;
let compScore = 0;
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
        let z = gameLogic(choice, compChoice);
        console.log(z);
});

//Comparing logic
 function gameLogic(a,b) {
    if(a === 'rock' && b === 'rock' || a === 'paper' && b === 'paper' || a === 'scissors' && b === 'scissors') {
        return 'Draw, No points';
    }
    else if (a === 'rock' && b === 'scissors') {
        playerScore++;
        return 'Player Won !';
    }
    else if (a === 'paper' && b === 'rock') {
        playerScore++;
        return 'Player Won !';
    }
    else if (a === 'scissors' && b === 'paper') {
        playerScore++;
        return 'Player Won !';
    }
    else {
        compScore++;
        return 'Computer Won !';
    }
 };


//Testing area


