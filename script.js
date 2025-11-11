function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber <= 0.33) {
    return "pierre";
  } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
    return "papier";
  } else {
    return "ciseau";
  }
}

function getHumanChoice() {
  const userInput = prompt(
    "Allez y pierre, papier ou ciseau a vous la baguette :"
  );
  return userInput.toLowerCase();
}

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice == computerChoice) {
    console.log("Egalite");
  } else if (
    (humanChoice == "pierre" && computerChoice == "ciseaux") ||
    (humanChoice == "ciseau" && computerChoice == "papier") ||
    (humanChoice == "papier" && computerChoice == "pierre")
  ) {
    console.log(`Vous gagnez ${humanChoice} bat ${computerChoice}`);
    return humanScore++;
  } else {
    console.log(`Vous perdez ! ${computerChoice} bat ${humanChoice}`);
    return computerScore++;
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    console.log(`---Manche ${i}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  console.log("--Resultat final");

  if (humanScore > computerScore) {
    console.log(
      `Vous remporter la partie avec ${humanScore} contre ${computerScore}`
    );
  } else if (humanScore < computerScore) {
    console.log(
      `Vous avez perdu la partie avec ${computerScore} contre ${humanScore}`
    );
  } else {
    console.log(`Match nul`);
  }
}

playGame();
