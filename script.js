//getting the image buttons
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorstn = document.getElementById('scissors');

//to display lives and games won by the player
const lives = document.querySelector('.lives');
const wonGames = document.querySelector('.games-won');


//to display the choices
const playerChoiceOutput = document.querySelector('.playerchoice');
const computerChoiceOutput = document.querySelector('.computerchoice');

//to display the result
const result = document.querySelector('.result');

//the choice variables
let playerChoice, computerChoice;

//the counter valiables for lives remaining and games won by the player
let playerLives = 3;
lives.innerText = playerLives;

let wonGamesCount = 0;
wonGames.innerText = wonGamesCount;


/*to check the winner of the round
0 -> lost game
1-> won game
2-> game is a tie*/

const checkWin = (player, computer) => {
    if(player === 'rock' && computer === 'paper'){
        // result.innerText = 'Paper wraps rock! You lose!';
        return 0;
    }
    else if(player === 'rock' && computer === 'scissors'){
        // result.innerText = 'Rock breaks scissors! You win!';
        return 1;
    }
    else if(player === 'paper' && computer === 'rock'){
        // result.innerText = 'Paper wraps rock! You win!';
        return 1;
    }
    else if(player === 'paper' && computer === 'scissors'){
        // result.innerText = 'Scissors cut paper! You lose!';
        return 0;
    }
    else if(player === 'scissors' && computer === 'rock'){
        // result.innerText = 'Rock breaks scissors! You lose!';
        return 0;
    }
    else if(player === 'scissors' && computer === 'paper'){
        // result.innerText = 'Scissors cut paper! You win!';
        return 1;
    }
    else{
        // result.innerText = "It's a tie";
        return 2;
    }
}


//to play a round of the game given the player has more than 0 lives remaining
const playRound = (playerSelection, computerSelection) => {
    if(checkWin(playerSelection, computerSelection) === 0){
        playerLives -= 1;
        lives.innerText = playerLives;
        result.innerText = "";
    }
    else if(checkWin(playerSelection, computerSelection) === 1){
        wonGamesCount += 1;
        wonGames.innerText = wonGamesCount;
        result.innerText = "";
    }
    else{
        result.innerText = "It's a tie";
    }
    
    //to check if the player has won majority of the games
    if(wonGamesCount >= 2){
        result.innerText = "You won the game!";
        reset();
    }
}

//to reset the counters upon losing or winning the game
const reset = () => {
    wonGamesCount = 0;
    wonGames.innerText = wonGamesCount;
    playerLives = 3;
    lives.innerText = playerLives;
}

//to get the choice from the computer
const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    let i = Math.floor(Math.random() * 3);
    return choices[i];
}

/*to get the player choice, computer choice and play a round if
remaining lives are more than 0 otherwise
the player loses the game and the counters are reset*/
const getPlayerChoice = (e) =>{
    if(playerLives > 0){
        playerChoice = e.target.id;
        playerChoiceOutput.innerText = playerChoice;

        computerChoice = getComputerChoice();
        computerChoiceOutput.innerText = computerChoice;

        playRound(playerChoice, computerChoice);
    }
    else{
        result.innerText = "No more lives remaining! You lost!";
        reset();
    }
}

//click functionality
rockBtn.addEventListener('click', getPlayerChoice);
paperBtn.addEventListener('click', getPlayerChoice);
scissorstn.addEventListener('click', getPlayerChoice);