//Declarations 
let inputs = document.querySelector(".inputs")
let playerScore = 0;
let compScore = 0;
const items = ['rock', 'paper', 'scissors'];
const compChoice = items[Math.floor(Math.random()*items.length)];
let playerChoice = inputs.addEventListener('pointerdown', (e) => {
        const target = e.target;
        const choice = target.dataset.item;
        console.log(choice)
    });

//Comparing system
    


//Testing area


