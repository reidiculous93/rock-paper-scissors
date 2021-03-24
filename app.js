function computerPlay() {
    let play = Math.random();
    if (play >= 0.01 && play <= 0.29) {
      return "Rock";
    } else if (play >= 0.3 && play <= 0.59) {
      return "Paper";
    } else {
      return "Scissors";
    }
  }

  let playerSelection = "";
  let computerSelection = "";

  let playerScore = 0;
  let computerScore = 0;

  function playRound(playerSelection, computerSelection) {
    // playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    // youDiv.textContent = "";
    // compDiv.textContent = "";
    // computerSelection = computerPlay();
    if (playerSelection == "rock" && computerSelection == "Paper") {
      div.textContent = "You Lose!  Paper beats Rock";
      computerScore += 1;
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
      div.textContent = "You Win!  Rock beats Scissors";
      playerScore += 1;
    } else if (playerSelection == "rock" && computerSelection == "Rock") {
      div.textContent = "It's a tie!";
    } else if (
      playerSelection == "paper" &&
      computerSelection == "Scissors"
    ) {
      div.textContent = "You Lose!  Scissors beats paper";
      computerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
      div.textContent = "You Win!  Paper beats rock";
      playerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "Paper") {
      div.textContent = "It's a tie!";
    } else if (
      playerSelection == "scissors" &&
      computerSelection == "Scissors"
    ) {
      div.textContent = "It's a tie!";
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
      div.textContent = "You Lose!  Rock beats scissors";
      computerScore += 1;
    } else if (
      playerSelection == "scissors" &&
      computerSelection == "Paper"
    ) {
      div.textContent = "You Win!  Scissors beats paper";
      playerScore += 1;
    }
    
    youDiv.textContent = `Your score is: ${playerScore}.`;
    compDiv.textContent = `Computer's score is: ${computerScore}.`;

    if (playerScore == 5) {
              div.textContent = 
                `You scored ${playerScore} and your opponent scored ${computerScore}. You have won! :)`
              ;
            } else if (computerScore == 5) {
              div.textContent =
                `You scored ${playerScore} and your oppenent scored ${computerScore}. You have lost! :(`
              ;
            } 
  }

 const div = document.querySelector('div');
 const youDiv = document.querySelector('#you');
 const compDiv = document.querySelector('#comp');

 const btns = document.querySelectorAll('button');
 btns.forEach((btn) => {
 btn.addEventListener('click', () => {
    if(btn.id == 'rock'){
        playerSelection = 'rock';
    } else if(btn.id == 'paper'){
        playerSelection = 'paper';
    } else if(btn.id == 'scissors'){
        playerSelection = 'scissors';
    }
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
 })
});

  // playRound(playerSelection, computerSelection);
//   function game() {
//     playRound(playerSelection, computerSelection);
//     playRound(playerSelection, computerSelection);
//     playRound(playerSelection, computerSelection);
//     playRound(playerSelection, computerSelection);
//     playRound(playerSelection, computerSelection);

//     if (playerScore > computerScore) {
//       alert(
//         `You scored ${playerScore} and your opponent scored ${computerScore}. You have won!`
//       );
//     } else if (computerScore > playerScore) {
//       alert(
//         `You scored ${playerScore} and your oppenent scored ${computerScore}. You have lost!`
//       );
//     } else {
//       alert(
//         `You scored ${playerScore} and your oppenent scored ${computerScore}. It's a tie!`
//       );
//     }
//   }