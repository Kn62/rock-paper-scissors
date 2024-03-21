let playerScore = 0;
let computerScore = 0;
   
function getUserChoice() {
   let userChoice = prompt("Rock, Paper, Scissors");
   let userChoiceInsensitive = userChoice.toLowerCase();
   let userChoiceFirstLetterUpperCase = userChoiceInsensitive.charAt(0).toUpperCase() + userChoiceInsensitive.slice(1);
   return userChoiceFirstLetterUpperCase;
}
   
function getComputerChoice () {
   const choices = ["Rock", "Paper", "Scissors"];
   const randomIndex = Math.floor(Math.random() *  choices.length);
   return choices[randomIndex];
}  
   
function playRound() {
   const playerSelection = getUserChoice();
   const computerSelection = getComputerChoice();
   const win = "You Won! " + playerSelection + " beats " + computerSelection;
   const lose = "You Lose! " + computerSelection + " beats " + playerSelection;
   const tie = "It's a tie, you both choosed " + playerSelection;
   const wrongTextInput = "Wrong text input try again";

   if ( playerSelection ===  computerSelection ) {
      return tie;
   } else if ( (playerSelection === "Rock" && computerSelection === "Paper") 
         || (playerSelection === "Paper" && computerSelection === "Scissors") 
         || (playerSelection === "Scissors" && computerSelection === "Rock") ) {
      computerScore++;
      return lose; 
   } else if ( (playerSelection === "Rock" && computerSelection === "Scissors") 
         || (playerSelection === "Paper" && computerSelection === "Rock") 
         || (playerSelection === "Scissors" && computerSelection === "Paper")) {
      playerScore++;
      return win;
   } else {
      return wrongTextInput
   }
};
   
function playGame(){
   let round;
   for (round = 1; round<= 5; round++) {
      console.log("Round " + round)
      console.log(playRound())
      console.log("Your score: " + playerScore + " Computer score: " + computerScore);
      }
   anounceWinner()
}

function anounceWinner () {
   if (playerScore > computerScore) {
      console.log("You Won!")
   } else if (playerScore < computerScore) {
      console.log("You Lose!")
   } else {
      console.log("It's a tie")
   }
}

playGame()