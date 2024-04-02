const containerRound = document.querySelector(".round");
const pRound = document.querySelector("#display-round");
const containerPlayerScores = document.querySelector("#player-score");
const pUserScore = document.querySelector("#display-player-score");
const containerComputerScores = document.querySelector("#computer-score");
const pComputerScore = document.querySelector("#display-computer-score");
const pAnnounce = document.querySelector("#announce")
const displayContainer = document.querySelector(".display-result")
const button5 = document.querySelector("#max-5-rounds");
const button10 = document.querySelector("#max-10-rounds");
const button20 = document.querySelector("#max-20-rounds");
const buttonRestartGame = document.querySelector("#reset-game");
const buttonScissors = document.querySelector("#scissors");
const buttonPaper = document.querySelector("#paper");
const buttonRock = document.querySelector("#rock");

let playerScore = 0;
let computerScore = 0;
let round = 0;
let roundMax = 30;

const restartGame = function() {
   window.location.reload();
}

const updateRoundDisplayed = function() {
   round++;
   pRound.textContent = `Round ${round}/${roundMax}`;
   displayContainer.appendChild(pRound);
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

const getComputerChoice = function() {
   const choices = ["Rock", "Paper", "Scissors"];
   const randomIndex = Math.floor(Math.random() *  choices.length);
   return choices[randomIndex];
} ;   

const playRound = function(playerSelection) {
   const computerSelection = getComputerChoice();
   
   const announceRoundResultTie = function() {
      pAnnounce.textContent = `It's a tie, you both choosed ${playerSelection}`;
      displayContainer.appendChild(pAnnounce);
   };
   
   const announceRoundResultLose = function() {
      pAnnounce.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
      displayContainer.appendChild(pAnnounce);
   };
   
   const announceRoundResultWin = function() {
      pAnnounce.textContent = `You Won! ${playerSelection} beats ${computerSelection}`;
      displayContainer.appendChild(pAnnounce);
   };

   const announceMatchWin = function() {
      pAnnounce.textContent = `You won the Match ! ${playerScore} - ${computerScore}`;
      displayContainer.appendChild(pAnnounce);
   }

   const announceMatchLose = function() {
      pAnnounce.textContent = `You lose the Match ! ${playerScore} - ${computerScore}`;
      displayContainer.appendChild(pAnnounce);
   }

   const announceMatchTie = function() {
      pAnnounce.textContent = `It's a tie ! ${playerScore} - ${computerScore}`;
      displayContainer.appendChild(pAnnounce);
   }

   if ( round > roundMax - 1 ) {
      if (playerScore > computerScore) {
         announceMatchWin();
      } else if (playerScore < computerScore) {
         announceMatchLose();
      } else {
         announceMatchTie();
      };
      buttonRestartGame.style.visibility = 'visible'
   } else {

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
}
   
const playWithRock = function () {
   console.log(playRound("Rock"));
}

const playWithPaper = function () {
   console.log(playRound("Paper"));
}

const playWithScissors = function () {
   console.log(playRound("Scissors"));
}

const playWith5 = function () {
   roundMax = 5;
   computerScore = 0;
   playerScore = 0;
   containerRound.style.visibility = 'hidden';
   containerRound.style.height = 0;
   pRound.textContent = `Round 0/${roundMax}`;
};

const playWith10 = function () {
   roundMax = 10;
   computerScore = 0;
   playerScore = 0;
   containerRound.style.visibility = 'hidden';
   containerRound.style.height = 0;
   pRound.textContent = `Round 0/${roundMax}`;
};

const playWith20 = function () {
   roundMax = 20;
   computerScore = 0;
   playerScore = 0;
   containerRound.style.visibility = 'hidden';
   containerRound.style.height = 0;
   pRound.textContent = `Round 0/${roundMax}`;
};

buttonRock.addEventListener("click", playWithRock );
buttonPaper.addEventListener("click", playWithPaper );
buttonScissors.addEventListener("click", playWithScissors);
buttonRestartGame.addEventListener("click", restartGame); 
button5.addEventListener("click", playWith5);
button10.addEventListener("click", playWith10);
button20.addEventListener("click", playWith20);
