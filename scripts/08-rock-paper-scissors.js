
const score = {
    wins: 0,
    losses: 0,
    ties: 0
};

// console.log(computerMove);
function whoWin(yourMove){
    let result = '';
    const game = ['rock', 'paper', 'scissors'];
    // 0 = rock, 1 = paper, 2 = scissors
    const computerMove = Math.floor(Math.random() * 3); // output: 0, 1 or 2
    // console.log(`Computer Move: ${computerMove}`);
    // console.log(`Your Move: ${yourMove}`);
    if (game.indexOf(yourMove) === computerMove){
        result = 'Tie.';
        score.ties += 1;
    }
    else if ((game.indexOf(yourMove) === 0 && computerMove === 2) || (game.indexOf(yourMove) === 1 && computerMove === 0) || (game.indexOf(yourMove) === 2 && computerMove === 1) ){
        result = 'You win.';
        score.wins += 1;
    }
    else{
        result = 'You lose.';
        score.losses += 1;
    }
    // alert(`You picked: ${yourMove}. Computer picked: ${game[computerMove]}. ${result}`);
    const gameResult = document.querySelector('.result');
    gameResult.innerText = `${result}`;

    const resultOutput = document.querySelector('.js-chosen-moves');
    resultOutput.innerHTML = `You <img src="images/${yourMove}-emoji.png" class="move-icon"> V.S <img src="images/${game[computerMove]}-emoji.png" class="move-icon"> Computer`;

    const scoreOutput = document.querySelector('.js-score');
    scoreOutput.innerText = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;

}

function resetScore() {
    const resetScore = document.querySelector('.reset-score-button');

    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}