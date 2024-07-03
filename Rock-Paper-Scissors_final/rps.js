const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    lose: 0,
    ties: 0
};
updateScore();



// Autoplaying funtion
let isAutoPlaying = false;
let intervalId;

function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval( ()=> {
            const PlayerMove = pickComputer();
            playGame(PlayerMove);
        }, 1000);
        isAutoPlaying = true;

    }
    else {
        clearInterval(intervalId)
        isAutoPlaying = false;
    }
}




function updateScore() {
    document.querySelector('.js-score').innerHTML = `wins:${score.wins} lose:${score.lose} Ties:${score.ties}`;
}

// addeventlistener function
document.querySelector('.js-rock-button').addEventListener('click',() => {
    playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click',() => {
    playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click',() => {
    playGame('scissors');
});


// keyboard
document.body.addEventListener('keydown',(event)=> {
    if(event.key==='r'){
        playGame('rock');
    }else if(event.key==='s'){
        playGame('scissors');
    }else if(event.key){
        playGame('paper');
    }
    // console.log(event.key);
});

function playGame(PlayerMove) {
    const computerMove = pickComputer();
    let result = '';
    if (PlayerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'you lose.';
        }
        else if (computerMove === 'paper') { result = 'you win.'; }
        else { result = 'Tie.'; }
    }
    else if (PlayerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'you lose.';
        } else {
            result = 'you win.';
        }
    } else if (PlayerMove === 'paper') {

        if (computerMove === 'rock') {
            result = 'you win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else {
            result = 'you lose.';
        }


    }
    if (result === 'you win.') {
        score.wins += 1;
    } else if (result === 'you lose.') {
        score.lose += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));

    updateScore();
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You
<img src="${PlayerMove}2.png" class="move-icon" alt="rock">
<img src="${computerMove}2.png" class="move-icon" alt="scissors">
Computer`;
    //alert(`you picked ${PlayerMove} and computer picked ${computerMove} . ${result}
    //`)

}



function pickComputer() {
    const RandomNumber = Math.random();
    let computerMove = '';

    if (RandomNumber >= 0 && RandomNumber < 1 / 3) {
        computerMove = 'rock';

    } else if (RandomNumber >= 1 / 3 && RandomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }
    console.log(computerMove);
    return computerMove;
}
