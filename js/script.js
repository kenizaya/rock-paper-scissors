// Guess a random choice
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

    return guess.toLowerCase();

}


let scores = [0, 0];    // index 0 is player score, index 1 is for computer

// Play a round of Rock Paper Scissors and update the score
function playRound(playerSelection, computerSelection) {

    const div = document.querySelector(".result");
    let tie = false;
    let playerWins = false;
    
    if (playerSelection === computerSelection) {
        div.textContent = "It's a tie";
        tie = true;
    }   else if (playerSelection === "rock" && computerSelection === "paper") {
        div.textContent = "You Lose! Paper beats Rock";
    }   else if (playerSelection === "paper" && computerSelection === "scissors") {
        div.textContent = "You Lose! Scissors beats Paper";
    }   else if (playerSelection === "scissors" && computerSelection === "rock") {
        div.textContent = "You Lose! Rock beats Scissors";
    }   else {
        div.textContent = "You Win! " + toTitleCase(playerSelection) + " beats " + toTitleCase(computerSelection);
        scores[0] += 1;
        playerWins = true;

    }

    if (!(tie || playerWins)) {
        scores[1] += 1;
    } else {
        tie = false;
    }

}

// Play the game, count the winnings and display the final result
function game() {

    let compChoice;

    const buttons = document.querySelectorAll("button");
    const status = document.querySelector(".status");
    const div = document.querySelector(".result");

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            compChoice = computerPlay();
            playRound(btn.className, compChoice);
            status.textContent = `Computer chose: ${toTitleCase(compChoice)}!`;
            displayScore(scores[0], scores[1]);

            // stop the game if any players score reaches 5
            if (scores[0] > 4 || scores[1] > 4) {
                div.classList.add("won");
                buttons.forEach((btn) => btn.disabled = true);
                if (scores[0] > 4) {
                    div.textContent = "Congrats! You Won 5 rounds.";
                } else {
                    div.textContent = "Game Over! Computer Wins.";
                }
                // playAgain();
            }

            
        });
        btn.addEventListener('mousedown', () => {
            btn.style.cssText = "border: 3px solid #c4ced6";
        });
        btn.addEventListener('mouseup', () => btn.style.cssText="outline: none");
    });

}


function toTitleCase(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function displayScore(p, c) {
    const player = document.querySelector(".player-score");
    const computer = document.querySelector(".computer-score");

    player.textContent = `Player: ${p}`;
    computer.textContent = `Computer: ${c}`;
}

// function playAgain() {
//     const buttons = document.querySelectorAll("button");
//     const div = document.querySelector(".result");
//     scores[0] = 0;
//     scores[1] = 0;


//     let input = prompt("Would you like to try again? Enter yes/no:");;

//     if (input.toLowerCase() == "yes") {
//         buttons.forEach((btn) => btn.disabled = false);
//     } else {
//         alert("Goodbye!!!");
//     }

//     div.classList.remove("won");
//     div.classList.remove("lost");

// }

game();