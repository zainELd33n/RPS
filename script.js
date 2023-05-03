//Declarations
let inputs = document.querySelector('.inputs')
let playerDisplay = document.querySelector('#pCountNum')
let compDisplay = document.querySelector('#cCountNum')
let roundInfo = document.querySelector('#roundInfo')
let roundDisplay
let round = 0
let count = 0
let playerScore = 1
let compScore = 1
const items = ['rock', 'paper', 'scissors']
// let compChoice
// let playerChoice

/**
 * There's no need for two event handlers here, the input element has
 * the pointerdown event when the user click or touch the selected opt
 * this will get the userChoice and immediately the compChoice will be
 * generated
 */

//Listener for the input of the player
inputs.addEventListener('pointerdown', (e) => {
  const target = e.target
  const userChoice = target.dataset.item
  const compChoice = items[Math.floor(Math.random() * items.length)]
  console.log(`user choice: ${userChoice}, computer choice: ${compChoice}`)
  //^ To make sure the logic works
  let checker = gameLogic(userChoice, compChoice)
  console.log(checker)
})

//Comparing logic
function gameLogic(a, b) {
  if (
    (a === 'rock' && b === 'rock') ||
    (a === 'paper' && b === 'paper') ||
    (a === 'scissors' && b === 'scissors')
  ) {
    return 'Draw, No points'
  }
  // No 'if else' need it because each if statement has it's own return
  // if a condition is valid will return the string and get out of the function
  if (a === 'rock' && b === 'scissors') {
    playerAddition()
    playerScore++
    return 'Player Won !'
  }
  if (a === 'paper' && b === 'rock') {
    playerAddition()
    playerScore++
    return 'Player Won !'
  }
  if (a === 'scissors' && b === 'paper') {
    playerAddition()
    playerScore++
    return 'Player Won !'
  }
  // If after going through all if statements the code get here this will run
  // No need for the last else statement
  compAddition()
  compScore++
  return 'Computer Won !'
}

//Scoring system
function playerAddition() {
  playerDisplay.innerHTML = playerScore
}
function compAddition() {
  compDisplay.innerHTML = compScore
}

//Testing area
