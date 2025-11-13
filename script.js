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

/*function getHumanChoice() {
  const userInput = prompt(
    "Allez y pierre, papier ou ciseau a vous la baguette :"
  );
  return userInput.toLowerCase();
}*/

var humanScore = 0;
var computerScore = 0;
//const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  let div = document.querySelector("#resultat");
  let para = document.createElement("p");

  div.appendChild(para);
  if (humanScore != 5 && computerScore != 5) {
    if (humanChoice == computerChoice) {
      para.textContent = "Egalite";
    } else if (
      (humanChoice == "pierre" && computerChoice == "ciseau") ||
      (humanChoice == "ciseau" && computerChoice == "papier") ||
      (humanChoice == "papier" && computerChoice == "pierre")
    ) {
      humanScore++;
      para.textContent = `Vous gagnez ${humanChoice} bat ${computerChoice} score : ${humanScore} vs ${computerScore}`;
    } else {
      computerScore++;
      para.textContent = `Vous perdez ! ${computerChoice} bat ${humanChoice}  score : ${humanScore} vs ${computerScore}`;
    }
  } else {
    if (humanScore == 5) {
      para.textContent += `Felicitation vous etes le premier a arriver a 5 score TOTAL: ${humanScore} vs ${computerScore}`;
    } else if (computerScore == 5) {
      para.textContent += `Vous perdez ! vs l'ordinateur score : ${humanScore} vs ${computerScore}`;
    }
  }
}

let btns = document.querySelector("#btns");
let resetButton = document.querySelector("#reset");
btns.addEventListener("click", (e) => {
  let humanChoice = e.target.id;
  let computerSelection = getComputerChoice();

  playRound(humanChoice, computerSelection);
});

resetButton.addEventListener("click", (e) => {
  let div = document.querySelector("#resultat");
  e.stopPropagation();
  location.reload();
});
