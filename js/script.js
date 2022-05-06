function computerPlay() {
    let rand = Math.floor(Math.random() * 3) + 1;
    
    let guess;

    if (rand === 1) {
        guess = "Rock";
    }   else if (rand === 2) {
        guess = "Paper";
    }   else {
        guess = "Scissors";
    }

    return guess;

}

function playRound(playerSelection, computerSelection) {
    lower = playerSelection.toLowerCase();
    playerSelection = lower.charAt(0).toUpperCase() + lower.slice(1);

    console.log(playerSelection);

    if (playerSelection === computerSelection) {
        return "It's a tie";
    }

    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock";
    }   else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper";
    }   else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors";
    }   else {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
}



console.log(playRound("rock", computerPlay()));