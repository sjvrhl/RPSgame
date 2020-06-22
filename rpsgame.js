let playerScore = 0;
let computerScore = 0;
let gameRound = 0;
let roundWinner;
let gamesWon = 0;
let gameSum = 0;

function computerPlay() {
  const computerSelection = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  return computerSelection[random];
}

function game() {
  let playerSelection = event.target.id;
  let computerSelection = computerPlay();
  if (playerSelection === "clear") {
    playerScore = 0;
    computerScore = 0;
    gameRound = 0;
    document.querySelector(
      ".score"
    ).textContent = `You ${playerScore}:${computerScore} Computer`;
    document.querySelector(".round").textContent = `Round ${gameRound}`;
    document.querySelectorAll(".visibility").forEach(function (el) {
      el.removeAttribute("style");
    });
    document.querySelector(
      ".text"
    ).textContent = `Ready to play another 5 rounds. What will you choose?`;
  } else if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    document.querySelector(
      ".score"
    ).textContent = `You ${playerScore}:${++computerScore} Computer`;
    document.querySelector(".round").textContent = `Round ${++gameRound}`;
    roundWinner = "computer";
    message();
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    document.querySelector(
      ".score"
    ).textContent = `You ${++playerScore}:${computerScore} Computer`;
    document.querySelector(".round").textContent = `Round ${++gameRound}`;
    roundWinner = "player";
    message();
  } else {
    document.querySelector(".round").textContent = `Round ${++gameRound}`;
    roundWinner = "tie";
    message();
  }

  function message() {
    if (gameRound >= 5 && playerScore == computerScore) {
      if (roundWinner === "computer") {
        document.querySelector(
          ".text"
        ).textContent = `Your ${playerSelection} does not beat ${computerSelection}.
        Tie after ${gameRound} rounds. It's all or nothing: next player to win a round wins the game.`;
      } else if (roundWinner === "player") {
        document.querySelector(
          ".text"
        ).textContent = `Your ${playerSelection} beats ${computerSelection}.
        Tie after ${gameRound} rounds. It's all or nothing: next player to win a round wins the game.`;
      } else {
        document.querySelector(
          ".text"
        ).textContent = `You both chose ${playerSelection}. Tie after ${gameRound} rounds.
        It's all or nothing: next player to win a round wins the game.`;
      }
    } else if (gameRound >= 5 && playerScore > computerScore) {
      document.querySelector(".game").textContent = `Games won: ${++gamesWon}/${++gameSum}`;
      if (roundWinner === "computer") {
        document.querySelector(
          ".text"
        ).textContent = `Your ${playerSelection} does not beat ${computerSelection}.
        Computer wins this round but you win the game!`;
      } else if (roundWinner === "player") {
        document.querySelector(
          ".text"
        ).textContent = `Your ${playerSelection} beats ${computerSelection}.
        You win this round and the game!`;
      } else {
        document.querySelector(
          ".text"
        ).textContent = `You both chose ${playerSelection}.
        This round is a tie but you win the game!`;
      }
      document.querySelectorAll(".visibility").forEach(function (el) {
        el.setAttribute("style", "visibility:hidden");
      });
    } else if (gameRound >= 5 && playerScore < computerScore) {
      document.querySelector(".game").textContent = `Games won: ${gamesWon}/${++gameSum}`;
      if (roundWinner === "computer") {
        document.querySelector(
          ".text"
        ).textContent = `Your ${playerSelection} does not beat ${computerSelection}.
        Computer wins this round and the game.`;
      } else if (roundWinner === "player") {
        document.querySelector(
          ".text"
        ).textContent = `Your ${playerSelection} beats ${computerSelection}.
        You win this round but the computer wins the game.`;
      } else {
        document.querySelector(
          ".text"
        ).textContent = `You both chose ${playerSelection}.
        This round is a tie but the computer wins the game.`;
      }
      document.querySelectorAll(".visibility").forEach(function (el) {
        el.setAttribute("style", "visibility:hidden");
      });
    } else {
      if (roundWinner === "computer") {
        document.querySelector(
          ".text"
        ).textContent = `Your ${playerSelection} does not beat ${computerSelection}.
        Computer wins this round.`;
      } else if (roundWinner === "player") {
        document.querySelector(
          ".text"
        ).textContent = `Your ${playerSelection} beats ${computerSelection}.
        You win this round.`;
      } else {
        document.querySelector(
          ".text"
        ).textContent = `You both chose ${playerSelection}. This round is a tie.`;
      }
    }
  }
}

document
  .querySelectorAll("button")
  .forEach((button) => button.addEventListener("click", game));
