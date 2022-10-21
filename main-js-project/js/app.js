const computerSelectionDisplay = document.getElementById("computer-selection")
const userSelectionDisplay = document.getElementById("user-selection")
const resultDisplay = document.getElementById("result")
const winnerDisplay = document.getElementById("winner")
const options = document.querySelectorAll("button")
const uscore = document.getElementById("uscore")
const cscore = document.getElementById("cscore")
let userSelection
let result
let computerSelection
let computerCounter = 0
let userCounter = 0
const possibleOptions = ["rock","paper","scissors"];


//every time the user clicks an option, the event obtains the id of the button and
//assigns it to the variable userSelection
options.forEach(option => option.addEventListener('click', (e) => { 
    userSelection = e.target.id
    generateComputerSelection()
    getResult()
}))

function generateComputerSelection(){
    computerSelection = possibleOptions[Math.floor(Math.random() * possibleOptions.length)]; 
}

function getResult(){
    switch(userSelection + computerSelection){
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
            resultDisplay.innerHTML = "You win!"
            userCounter++
            console.log("user" + userCounter)
            break
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
            resultDisplay.innerHTML = "You lose!"
            computerCounter++ 
            console.log("computer" + computerCounter)
            break
        case "paperpaper":
        case "scissorsscissors":
        case "rockrock":
            resultDisplay.innerHTML = "It's a draw!"
            break
    }

    uscore.innerHTML = userCounter.toString()
    cscore.innerHTML = computerCounter.toString()

    if (userCounter >= 5){
        winnerDisplay.innerHTML = "You won the round!" 
    } 
    if (computerCounter >= 5){
        winnerDisplay.innerHTML = "The computer won the round!"
    }
}

 