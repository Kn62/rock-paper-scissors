const containerRound = document.querySelector(".round");
const pRound = document.querySelector("#display-round");
const containerPlayerScores = document.querySelector("#player-score");
const pUserScore = document.querySelector("#display-player-score");
const containerComputerScores = document.querySelector("#computer-score");
const pComputerScore = document.querySelector("#display-computer-score");
const containerAnnounce = document.querySelector(".announce-round")
const pAnnounce = document.querySelector("#announce")

let playerScore = 0;
let computerScore = 0;
let round = 0;

const updateRoundDisplayed = function() {
   round++;
   pRound.textContent = round;
   containerRound.appendChild(pRound);
};

const updateUserScoreDisplayed = function() {
   playerScore++;
   pUserScore.textContent = playerScore;
   containerPlayerScores.appendChild(pUserScore);
};

const updateComputerScoreDisplayed = function() {
   computerScore++;
   pComputerScore.textContent = computerScore;
   containerComputerScores.appendChild(pComputerScore);
};

const announceRoundResultTie = function() {
   pAnnounce.textContent = `It's a tie`;
   containerAnnounce.appendChild(pAnnounce);
};

const announceRoundResultLose = function() {
   pAnnounce.textContent = `You Lose!`;
   containerAnnounce.appendChild(pAnnounce);
};

const announceRoundResultWin = function() {
   pAnnounce.textContent = `You Won!`;
   containerAnnounce.appendChild(pAnnounce);
};

const getComputerChoice = function() {
   const choices = ["Rock", "Paper", "Scissors"];
   const randomIndex = Math.floor(Math.random() *  choices.length);
   return choices[randomIndex];
} ; 

const playRound = function(playerSelection) {
   const computerSelection = getComputerChoice();
 
   if ( playerSelection ===  computerSelection ) {
      updateRoundDisplayed();
      announceRoundResultTie();
      return `Round ${round} \n It's a tie, you both choosed ${playerSelection} \n Your score = ${playerScore}\n Computer score = ${computerScore}`;
   } else if ( (playerSelection === "Rock" && computerSelection === "Paper") 
            || (playerSelection === "Paper" && computerSelection === "Scissors") 
            || (playerSelection === "Scissors" && computerSelection === "Rock") ) {
      updateComputerScoreDisplayed();
      updateRoundDisplayed();
      announceRoundResultLose();
      return `Round ${round} \n You Lose! ${computerSelection} beats ${playerSelection} \n Your score = ${playerScore}\n Computer score = ${computerScore}`; 
   } else if ( (playerSelection === "Rock" && computerSelection === "Scissors") 
            || (playerSelection === "Paper" && computerSelection === "Rock") 
            || (playerSelection === "Scissors" && computerSelection === "Paper")) {
      updateUserScoreDisplayed();
      updateRoundDisplayed();
      announceRoundResultWin();
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