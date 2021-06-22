//*Main game function
const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  const playGame = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorsBtn = document.querySelector(".scissors");
    const pOption = [rockBtn, paperBtn, scissorsBtn];
    const cOption = ["rock", "paper", "scissors"];

    pOption.forEach((option) => {
      option.addEventListener("click", function () {
        let movesCounter = document.querySelector(".moves-counter");
        moves++;
        movesCounter.textContent = `Moves left: ${10 - moves}`; //When moves hits 10 the game will end

        const choice = Math.floor(Math.random() * 3);
        const computerChoice = cOption[choice];

        //Check who wins
        winner(this.innerText, computerChoice);

        //Calling gameOver() after 10 moves
        if (moves == 10) {
          gameOver(pOption, movesCounter);
        }
      });
    });
  };

  //function to decide winner
  const winner = (player, computer) => {
    const result = document.querySelector(".result");
    const playerScoreBoard = document.querySelector(".p-count");
    const computerScoreBoard = document.querySelector(".c-count");

    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if (player == "rock") {
      if (computer == "paper") {
        result.style.fontSize = "2rem";
        result.textContent = "Computer won";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.style.fontSize = "2rem";
        result.textContent = "Player won";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player == "scissors") {
      if (computer == "rock") {
        result.style.fontSize = "2rem";
        result.textContent = "Computer won";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.style.fontSize = "2rem";
        result.textContent = "Player won";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player == "paper") {
      if (computer == "scissors") {
        result.style.fontSize = "2rem";
        result.textContent = "Computer won";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.style.fontSize = "2rem";
        result.textContent = "Player won";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }
  };

  //function to run when the game is over
  const gameOver = (pOption, movesCounter) => {
    const chooseMove = document.querySelector(".move");
    const result = document.querySelector(".result");
    const reloadBtn = document.querySelector(".reload");

    pOption.forEach((option) => {
      option.style.display = "none";
    });

    chooseMove.innerText = "Game over!";
    movesCounter.style.display = "none";

    if (playerScore > computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "You won the game!";
      result.style.color = "#308d46";
    } else if (playerScore < computerScore) {
      result.style.fontSize = "2rem";
      result.textContent = "You lost the game";
      result.style.color = "red";
    } else {
      result.style.fontSize = "2rem";
      result.innerText = "Tie game";
      result.style.color = "red";
    }

    reloadBtn.innerText = "Restart";
    reloadBtn.style.display = "flex";
    reloadBtn.addEventListener("click", () => {
      window.location.reload();
    });
  };

  playGame();
};

game();
