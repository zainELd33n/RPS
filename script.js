//Declarations 
let inputs = document.querySelector(".inputs")
let playerScore = 0;
let compScore = 0;
const items = ['rock', 'paper', 'scissors']; 

let compChoice;
 inputs.addEventListener('pointerdown', () => {
    compChoice = items[Math.floor(Math.random()*items.length)];
});

let playerChoice = inputs.addEventListener('pointerdown', (e) => {
        const target = e.target;
        const choice = target.dataset.item;
        console.log(` choice: ${choice}, compChoice: ${compChoice}`);
        //^ To make sure the logic works
        let z = gameLogic(choice, compChoice);
        console.log(z);
    });

//Comparing system
 function gameLogic(a,b) {
    if(a === 'rock' && b === 'rock' || a === 'paper' && b === 'paper' || a === 'scissors' && b === 'scissors') {
        return 'Draw, No points'
    }
    else if (a === 'rock' && b === 'scissors') {
        return 'Player Won !'
    } 
    else if (a === 'paper' && b === 'rock') {
        return 'Player Won !'
    }
    else if (a === 'scissors' && b === 'paper') {
        return 'Player Won !'
    }
    else {
        return 'Computer Won !'
    }

 }


//Testing area

/*
if(playerChoice === 'rock' && compChoice === 'rock') {
    console.log('true')
    console.log(`${playerChoice}, ${compChoice}`)
}
*/
