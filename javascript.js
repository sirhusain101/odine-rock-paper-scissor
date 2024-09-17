// Score variables
let userScore = 0;
let computerScore = 0;

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

// Function for user choice
function getUserChoice() {
  let userChoice = prompt("Rock, Paper or Scissor?").toLowerCase();
  while (
    userChoice !== "rock" &&
    userChoice !== "paper" &&
    userChoice !== "scissor"
  ) {
    userChoice = prompt(
      "Enter a valid choice: Rock, Paper or Scissor?"
    ).toLowerCase();
  }
  return userChoice;
}

// Function for game logic
function playRound(userScore, computerScore) {
  const computerSelection = getComputerChoice();
  const userSelection = getUserChoice();

  if (
    (computerSelection === "rock" && userSelection === "scissor") ||
    (computerSelection === "scissor" && userSelection === "paper") ||
    (computerSelection === "paper" && userSelection === "rock")
  ) {
    console.log(`You Lose! ${computerSelection} beats ${userSelection}.`);
    computerScore += 1;
  } else if (
    (userSelection === "rock" && computerSelection === "scissor") ||
    (userSelection === "scissor" && computerSelection === "paper") ||
    (userSelection === "paper" && computerSelection === "rock")
  ) {
    console.log(`You Win! ${userSelection} beats ${computerSelection}.`);
    userScore += 1;
  } else {
    console.log(`It's a Tie! ${userSelection} cancels ${computerSelection}.`);
  }
  return { userScore, computerScore };
}

// Function for total rounds prompt
function getTotalRounds() {
  let userInputRound = Number(prompt("How many rounds do you wanna play:"));
  while (isNaN(userInputRound) || userInputRound < 1) {
    userInputRound = Number(prompt("Enter a valid number:"));
  }
  return userInputRound;
}

// Function for game play rounds
function playGame() {
  const totalRounds = getTotalRounds();
  let round = 1;

  while (round <= totalRounds) {
    ({ userScore, computerScore } = playRound(userScore, computerScore));
    round++;
  }
  console.log(`Score - User: ${userScore} | Computer: ${computerScore}`);
}

// Function for who wins
function whoWon() {
  if (userScore > computerScore) {
    alert("You Won! You beat Computer");
  } else if (userScore < computerScore) {
    alert("You Lost! Computer beat You.");
  } else {
    alert("Tied! Nobody Won or Lost.");
  }
}

// Run game
playGame();
whoWon();
