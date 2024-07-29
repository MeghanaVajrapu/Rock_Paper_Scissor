let rounds;
let score = 0;
let roundsLeft;

function startGame() {
    rounds = parseInt(document.getElementById('rounds').value);
    if (isNaN(rounds) || rounds <= 0) {
        alert("Please enter a valid number of rounds.");
        return;
    }
    score = 0;
    roundsLeft = rounds;
    document.getElementById('rounds-section').classList.add('hidden');
    document.getElementById('game-section').classList.remove('hidden');
    document.getElementById('score').innerText = score;
    document.getElementById('rounds-left').innerText = roundsLeft;
}

function playGame(userChoice) {
    if (roundsLeft <= 0) {
        alert("Game over. Please start a new game.");
        return;
    }
    
    const computerChoice = Math.floor(Math.random() * 3);
    let result;

    if (computerChoice === userChoice) {
        result = "It's a draw";
    } else if ((userChoice === 0 && computerChoice === 2) || 
               (userChoice === 1 && computerChoice === 0) || 
               (userChoice === 2 && computerChoice === 1)) {
        result = "You win";
        score += 1;
    } else {
        result = "You lose";
    }

    roundsLeft -= 1;

    document.getElementById('result').innerText = `Computer chose: ${choiceToString(computerChoice)}. ${result}`;
    document.getElementById('score').innerText = score;
    document.getElementById('rounds-left').innerText = roundsLeft;

    if (roundsLeft === 0) {
        document.getElementById('result').innerText += "\nGame over!";
    }
}

function choiceToString(choice) {
    switch (choice) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
        default:
            return '';
    }
}
