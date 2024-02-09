function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    if (choice == 1) {
        return 'rock';
    }
    else if (choice == 2) {
        return 'scissors';
    }
    else {
        return 'paper';
    }
}

function playRound(playerSelection, computerSelection) {
    const description = document.querySelector('.description');
    if (playerSelection === 'rock' && computerSelection == 'scissors') {
        description.textContent = 'Rock beats scissors';
        return 1;
    }
    if (playerSelection === 'rock' && computerSelection == 'paper') {
        description.textContent = 'Paper beats rock';
        return 0;
    }
    if (playerSelection === 'paper' && computerSelection == 'rock') {
        description.textContent = 'Rock beats scissors';
        return 0;
    }
    if (playerSelection === 'paper' && computerSelection == 'paper') {
        description.textContent = 'Scissors beats paper';
        return 1;
    }
    if (playerSelection === 'scissors' && computerSelection == 'rock') {
        description.textContent = 'Paper beats rock';
        return 1;
    }
    if (playerSelection === 'scissors' && computerSelection == 'scissors') {
        description.textContent = 'Scissors beats paper';
        return 0;
    }
    if (playerSelection === computerSelection) {
        description.textContent = 'Tie';
        return 2;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let outcome;
    let options = ['rock', 'paper', 'scissors'];
    const buttons = document.querySelectorAll('button');
    const scores = document.querySelector('.scores');
    const round = document.querySelector('.round')
    const conclusion = document.querySelector('.conclusion');
    for (let i = 0; i<3; i++) {
        buttons[i].addEventListener('click', () => {
            ongoing = computerScore != 5 && playerScore != 5;
            if (ongoing) {
                outcome = playRound(options[i], getComputerChoice());
                if (outcome === 0) {
                    computerScore ++;
                    round.textContent = 'You lose!';
                }
                else if (outcome === 1 && computerScore != 5 && playerScore != 5) {
                    playerScore ++;
                    round.textContent = 'You win!';
                }
                scores.textContent = `player:${playerScore} computer:${computerScore}`;
                if (playerScore === 5) {
                    conclusion.textContent = 'You won the entire game!';
                }
                else if (computerScore === 5) {
                    conclusion.textContent = 'The computer won the entire game!';
                }
            }
        });
    }
    
}

game();
