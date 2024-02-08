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

function playRound(playerSelection, computerSelection, screen) {
    if (playerSelection === 'rock' && computerSelection == 'scissors') {
        screen.textContent = 'You win, rock beats scissors\n';
        return 1;
    }
    if (playerSelection === 'rock' && computerSelection == 'paper') {
        screen.textContent ='You lose, paper beats rock\n';
        return 0;
    }
    if (playerSelection === 'paper' && computerSelection == 'rock') {
        screen.textContent = 'You lose, rock beats scissors\n';
        return 0;
    }
    if (playerSelection === 'paper' && computerSelection == 'paper') {
        screen.textContent = 'You win, scissors beats paper\n';
        return 1;
    }
    if (playerSelection === 'scissors' && computerSelection == 'rock') {
        screen.textContent = 'You win, paper beats rock\n';
        return 1;
    }
    if (playerSelection === 'scissors' && computerSelection == 'scissors') {
        screen.textContent = 'You lose, scissors beats paper\n';
        return 0;
    }
    if (playerSelection === computerSelection) {
        screen.textContent = 'Tie\n';
        return 2;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let outcome;
    let options = ['rock', 'paper', 'scissors'];
    const buttons = document.querySelectorAll('button');
    const screen = document.querySelector('div');
    for (let i = 0; i<3; i++) {
        buttons[i].addEventListener('click', () => {
            outcome = playRound(options[i], getComputerChoice(), screen);
            if (outcome === 0) {
                computerScore ++;
            }
            else if (outcome === 1) {
                playerScore ++;
            }
            screen.textContent += `player:${playerScore} computer:${computerScore}`;
            if (playerScore === 5) {
                screen.textContent = 'You won the entire game!';
            }
            else if (computerScore === 5) {
                screen.textContent = 'The computer won the entire game!';
            }
        });
    }
    
}

game();
