//Get a random Rock Paper Scissors choice for UI
function getComputerChoice () {
   const choices = ["Rock", "Paper", "Scissors"];
   const randomIndex = Math.floor(Math.random()*3);
   return choices[randomIndex];
}

//Set a User choices as a variable
let userChoice = prompt("Rock, Paper or Scissors");

//Get User choice case-insensitive
function getUserChoice(){
   const userChoiceInsensitive = userChoice.toLowerCase();
   return userChoiceInsensitive;
}

//Set 2 constant
const playerSelection = getUserChoice();
const computerSelection = getComputerChoice();

//Play a round 
if (playerSelection === "rock" && computerSelection === "Rock") {
   console.log("It's a tie between Rock and Rock!");
} else if (playerSelection === "rock" && computerSelection === "Paper") {
   console.log("You Lose! Paper beats Rock");
} else (playerSelection === "rock" && computerSelection === "Scissors"); {
   console.log("You Won! Rock beats Scissors")
};

if (playerSelection === "paper" && computerSelection === "Rock") {
   console.log("You Won! Paper beats Rock");
} else if (playerSelection === "paper" && computerSelection === "Paper") {
   console.log("It's a tie between Paper and Paper!");
} else (playerSelection === "paper" && computerSelection === "Scissors"); {
   console.log("You Lose! Scissors beats Paper")
};

if (playerSelection === "scissors" && computerSelection === "Rock") {
   console.log("You Lose! Rock beats Scissors");
} else if (playerSelection === "scissors" && computerSelection === "Paper") {
   console.log("You Won! Paper beats Rock");
} else (playerSelection === "scissors" && computerSelection === "Scissors"); {
   console.log("It's a tie between Scissors and Scissors!")
}