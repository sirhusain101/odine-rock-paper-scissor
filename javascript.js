// Score variables
let userScore = 0;
let computerScore = 0;

// Buttons selected by id
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");

// Create replay button and start it hidden
const replayBtn = document.querySelector("#replay");
replayBtn.style.display = "none";

// Selects score and message content
let score = document.querySelector("#score");
let message = document.querySelector("#message");

// Function for computer choice
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if (computerChoice === 3) {
    return "rock";
  } else if (computerChoice === 2) {
    return "scissor";
  } else {
    return "paper";
  }
}

// Function for game logic
function playRound(userSelection) {
  const computerSelection = getComputerChoice();

  if (
    (computerSelection === "rock" && userSelection === "scissor") ||
    (computerSelection === "scissor" && userSelection === "paper") ||
    (computerSelection === "paper" && userSelection === "rock")
  ) {
    message.innerText = `You lose this round! ${computerSelection} beats ${userSelection}.`;
    computerScore += 1;
  } else if (
    (userSelection === "rock" && computerSelection === "scissor") ||
    (userSelection === "scissor" && computerSelection === "paper") ||
    (userSelection === "paper" && computerSelection === "rock")
  ) {
    message.innerText = `You win this round! ${userSelection} beats ${computerSelection}.`;
    userScore += 1;
  } else {
    message.innerText = `This round is a tie! ${userSelection} cancels ${computerSelection}.`;
  }
  // display running score
  score.innerText = `User Score: ${userScore} | Computer Score: ${computerScore}`;

  if (userScore === 5) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
    message.innerText = `Final Result: You Won! You beat Computer ${userScore} to ${computerScore}.`;
    replayBtn.style.display = "block";

    userScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
    message.innerText = `Final Result: You Lost! Computer beat You ${computerScore} to ${userScore}.`;
    replayBtn.style.display = "block";

    userScore = 0;
    computerScore = 0;
  }

  replayBtn.addEventListener("click", () => {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorBtn.disabled = false;
    score.innerText = "";
    message.innerText = "";
    replayBtn.style.display = "none";
  });
}

// Event listeners
rockBtn.addEventListener("click", () => {
  playRound("rock");
});

paperBtn.addEventListener("click", () => {
  playRound("paper");
});

scissorBtn.addEventListener("click", () => {
  playRound("scissor");
});
