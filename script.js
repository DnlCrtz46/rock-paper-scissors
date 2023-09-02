let yourScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(choices.length * Math.random());
    return choices[random];
}

function selections(playerSelection, computerSelection) {
    const lowerCasePlayerSelection = playerSelection.toLowerCase();
    if (lowerCasePlayerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You Lose! Paper beats Rock";
    } else if (lowerCasePlayerSelection === "rock" && computerSelection === "scissors") {
        yourScore++;
        return "You win! Rock beats Scissors";
    } else if (lowerCasePlayerSelection === "paper" && computerSelection === "rock") {
        yourScore++;
        return "You win! Paper beats Rock";
    } else if (lowerCasePlayerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You Lose! Scissors beats Paper";
    } else if (lowerCasePlayerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    } else if (lowerCasePlayerSelection === "scissors" && computerSelection === "paper") {
        yourScore++;
        return "You win! Scissors beats Paper";
    } else {
        return "It's a tie!";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const getYourChoice = prompt();
        results = selections(getYourChoice, getComputerChoice());
        console.log(`You ${yourScore} - ${computerScore} Computer | ${results}`);
    }
}

game();