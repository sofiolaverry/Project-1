// Mathematical Shapes

//To find the diagonal of a square you have to calculate the square root of 2
// multiplied by the length of the side
function diagonalOfSquare(){
    var side = prompt("Type the size of the square's side");
    let sqrt = Math.sqrt(2);
    sqrt = sqrt * side;
    alert("The diagonal of a square with " + side + " cm side is " + sqrt);
}

//Heron formula
function triangleArea(){
    var side1 = parseInt(prompt("Type the first side of the triangle"));
    var side2 = parseInt(prompt("Type the second side of the triangle"));
    var side3 = parseInt(prompt("Type the third side of the triangle"));

    var s = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
    alert("The area of the triangle is " + area);
}

function circumference(){
    var radius = prompt("Type the radius of the circle");
    const Pi = 3.14159;
    var circumference = 2 * Pi * radius;
    alert("The circumference of the circle is " + circumference );
}

// Conditional Statements & Loops

//A)
function exerciseA(){
    var num1 = prompt("Type the first number");
	var num2 = prompt("Type the second number");
	if (num1> num2){
     alert(num1);
      } else {
	    alert(num2);
        }
	}

//B)
function exerciseB(){
    var num = prompt("Type a number");
    if(num % 2 == 0){
        alert("The number is even")
    }else{
        alert("The number is odd")
    }
}


//Main project
const options = ["rock","paper","scissors"];

function computerPlay(){
    const selection = Math.floor(Math.random() * options.length);
    const computerSelection = options[selection]; 
    console.log(computerSelection);
    return computerSelection
}

function userPlay(){
    const playerSelection = prompt("Type your choice").toLowerCase();
    console.log(playerSelection);
    return playerSelection
}

function round(computerSelection, playerSelection){   

    let userWins = 0;
    let computerWins = 0;
//user chooses rock
    if(playerSelection === "rock" && computerSelection === "paper") {
        console.log ('You lose! Paper beats rock!'); 
        computerWins =+ 1;
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log ("You win! Rock beats scissors");
        userWins =+ 1; 
    }
   
// user chooses paper
     else if(playerSelection === "paper" && computerSelection === "rock") {
        console.log ("You win! Paper beats rock");
        userWins =+ 1;      
    }  else if (playerSelection === "paper" && computerSelection === "scissors") { 
        console.log ("You lose! Scissors beats paper!");  
        computerWins =+ 1;

//user chooses scissors
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        console.log ("You lose! Rock beats scissors!"); 
        computerWins =+ 1;

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log ("You win! Scissors beats paper!");
        userWins =+ 1;      
    } else  { 
        console.log ("It is a tie!");  
    } 
    
    console.log(userWins);
    console.log(computerWins);
    
}



function game(){
    for(let i = 0; i < 5; i++){
        round(computerPlay(), userPlay());
      
    }
}

game();