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

