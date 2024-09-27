let score1 = 0;
let score2 = 0;
let a = '';
let b = '';
console.log(playGame());
function playGame () {

    for (let i = 0; i < 5; i++) {
    a = prompt("Enter your choice to start: (rock, paper or scissors)");
    a = a.toLowerCase();
    while (a != 'rock' && a != 'paper' && a != 'scissors') {
    console.log('Wrong value, refresh the page and try again');
    a = prompt("Enter your choice to start: (rock, paper or scissors)");
    a = a.toLowerCase();
    }
    b = Math.random();
    
  function getMachineChoice() {
    if (b >= 0 && b <= 0.33) {
        return 'Rock';
    } else if (b >= 0.34 && b <= 0.66) {
        return 'Paper'; 
    } else {
        return 'Scissors';
    }
  }

  function getHumanChoice() {
        if (a == 'rock') {
            return 'Rock';
        } else if (a == 'paper') {
            return 'Paper';
        } else if (a == 'scissors') {
            return 'Scissors';
        }
    }

    const humanChoice = getHumanChoice();
    const machineChoice = getMachineChoice();
        console.log("Your: " + humanChoice + " vs PC's: " + machineChoice);
   function playRound () {
        if ((humanChoice == 'Rock' && machineChoice == 'Scissors') || (humanChoice == 'Paper' && machineChoice == 'Rock') || (humanChoice == 'Scissors' && machineChoice == 'Paper')) {
            score1++;
            return 'Human won!';
        } else if ((humanChoice == 'Scissors' && machineChoice == 'Rock') || (humanChoice == 'Rock' && machineChoice == 'Paper') || (humanChoice == 'Paper' && machineChoice == 'Scissors')) {
            score2++;
            return 'Computer won!';
        } else {
            return 'No winner';
        }
   }
   console.log(playRound());
}
console.log("SCORE - You: " + score1 + " vs PC's score " + score2);
if (score1 > score2) {
    alert('Your score is ' + score1 + ' vs ' + score2 + '! Congratulations, you beat the computer :)');
} else if (score1 < score2) {
    alert('Your score is ' + score1 + ' vs ' + score2 + '! The Machine won this time.');
} else {
    alert("Score is: " + score1 + " vs " + score2 + ". You're both the same lucky today! Let's try again");
}
 
}