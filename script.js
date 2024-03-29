let playerScore = 0;
let computerScore = 0;
let round = 0;

const getComputerChoice = function() {
   const choices = ["Rock", "Paper", "Scissors"];
   const randomIndex = Math.floor(Math.random() *  choices.length);
   return choices[randomIndex];
}  

const playRound = function(playerSelection) {
   const computerSelection = getComputerChoice();
 
   if ( playerSelection ===  computerSelection ) {
      round++;
      return `Round ${round} \n It's a tie, you both choosed ${playerSelection} \n Your score = ${playerScore}\n Computer score = ${computerScore}`;
   } else if ( (playerSelection === "Rock" && computerSelection === "Paper") 
            || (playerSelection === "Paper" && computerSelection === "Scissors") 
            || (playerSelection === "Scissors" && computerSelection === "Rock") ) {
      computerScore += 1;
      round++;
      return `Round ${round} \n You Lose! ${computerSelection} beats ${playerSelection} \n Your score = ${playerScore}\n Computer score = ${computerScore}`; 
   } else if ( (playerSelection === "Rock" && computerSelection === "Scissors") 
            || (playerSelection === "Paper" && computerSelection === "Rock") 
            || (playerSelection === "Scissors" && computerSelection === "Paper")) {
      playerScore += 1;
      round++;
      return `Round ${round} \n You Won! ${playerSelection} beats ${computerSelection} \n Your score = ${playerScore}\n Computer score = ${computerScore}`;
   };   
};

const playWithRock = function () {
   console.log(playRound("Rock"));
}
const playWithPaper = function () {
   console.log(playRound("Paper"));
}
const playWithScissors = function () {
   console.log(playRound("Scissors"));
}

const buttonRock = document.querySelector("#rock");
buttonRock.addEventListener("click", playWithRock );


const buttonPaper = document.querySelector("#paper");
buttonPaper.addEventListener("click", playWithPaper );


const buttonScissors = document.querySelector("#scissors");
buttonScissors.addEventListener("click", playWithScissors);