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
    let lower = playerSelection.toLowerCase();
    playerSelection = lower.charAt(0).toUpperCase() + lower.slice(1);

    if (playerSelection === computerSelection) {
        console.log("It's a tie");
    }   else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("You Lose! Paper beats Rock");
    }   else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You Lose! Scissors beats Paper");
    }   else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("You Lose! Rock beats Scissors");
    }   else {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
        return 1;

    }

    return 0;

}

function game() {
    let winCount = 0;
    for (i = 0; i < 5; i++) {
        winCount += playRound(prompt("Choose Rock, Papers, Scissors: "), computerPlay());
    }

    console.log(winCount);
}