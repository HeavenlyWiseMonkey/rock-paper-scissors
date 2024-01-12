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

function doRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('You win, rock beats scissors');
        return true;
    }
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('You lose, paper beats rock');
        return false;
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log('You lose, rock beats scissors');
        return false;
    }
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('You win, scissors beats paper');
        return true;
    }
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('You win, paper beats rock');
        return true;
    }
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log('You lose, scissors beats paper');
        return false;
    }
    if (playerSelection == computerSelection) {
        console.log('Tie, replay')
        let getPlayerChoice;
        while (getPlayerChoice != 'rock' && getPlayerChoice != 'paper' && getPlayerChoice != 'scissors') {
            getPlayerChoice = prompt("Rock, paper, scissors").toLowerCase();
        }
        return doRound(getPlayerChoice, getComputerChoice());
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let getPlayerChoice;
    let outcome;
    for (let i = 0; i<5; i++) {
        getPlayerChoice = undefined;
        while (getPlayerChoice != 'rock' && getPlayerChoice != 'paper' && getPlayerChoice != 'scissors') {
            getPlayerChoice = prompt("Rock, paper, scissors").toLowerCase();
        }
        outcome = doRound(getPlayerChoice, getComputerChoice());
        if (outcome) {
            playerScore ++;
        }
        else {
            computerScore ++;
        }
        console.log(playerScore, computerScore);
        if (playerScore == 3) {
            return 'You win the game!';
        }
        else if (computerScore == 3) {
            return 'You lose the game, too bad!';
        }
    }
}

console.log(game());
