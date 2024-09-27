const buttons = document.querySelectorAll("button");
const game_log = document.querySelector("#game_log");
const parentElement = document.getElementById('game_log');
let firstElement;

let humanChoice;
let machineChoice;
let result;
let score1 = 0;
let score2 = 0;
let wnr = 0;

function getMachineChoice() {
    if (machineChoice >= 0 && machineChoice <= 0.33) {
        return 'Rock';
    } else if (machineChoice >= 0.34 && machineChoice <= 0.66) {
        return 'Paper'; 
    } else {
        return 'Scissors';
    }
  }

  function playRound() {
    firstElement = parentElement.firstChild;
    machineChoice = getMachineChoice();
    if ((humanChoice == 'Rock' && machineChoice == 'Scissors') || (humanChoice == 'Paper' && machineChoice == 'Rock') || (humanChoice == 'Scissors' && machineChoice == 'Paper')) {
        score1++;
        wnr = 1;
        return 'Human won!';
    } else if ((humanChoice == 'Scissors' && machineChoice == 'Rock') || (humanChoice == 'Rock' && machineChoice == 'Paper') || (humanChoice == 'Paper' && machineChoice == 'Scissors')) {
        score2++;
        wnr = 2;
        return 'Computer won!';
    } else {
        wnr = 0;
        return 'No winner';
    }
}

function gameLog() {

    if (score1 > score2) {
        console.log('Your score is ' + score1 + ' vs ' + score2 + '! Congratulations, you beats the computer so far :)');
        } else if (score1 < score2) {
        console.log('Your score is ' + score1 + ' vs ' + score2 + '! The Machine wins so far');
        } else {
        console.log("Score is: " + score1 + " vs " + score2 + ". You're both the same lucky today! Let's try again");
        }

    const result = document.createElement("h3");
    const round = document.createElement("h2");
    result.classList.add("result");

    result.textContent = playRound() + " Your score " + score1 + " vs PC's score " + score2;
    if (wnr == 1) { result.style.color = 'green'; } else if (wnr == 2) { result.style.color = 'red'; } else if (wnr == 0) { result.style.color = 'black'; }

    if (score1 == '5' && score2 < score1) {
        round.classList.add("round");
        round.textContent = "Congratulations! You're WON this round";
        round.style.color = 'green';
        score1 = score2 = 0;
    } else if (score2 == '5' && score2 > score1) {
        round.classList.add("round");
        round.textContent = "Damn! The MACHINE won this time. Let's try again";
        round.style.color = 'red';
        score1 = score2 = 0;
    }

parentElement.insertBefore(round, firstElement);
parentElement.insertBefore(result, firstElement);
//game_log.appendChild(result);
//game_log.appendChild(round);
}

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        humanChoice = button.id;
        machineChoice = Math.random();
        gameLog();
    });
  });
