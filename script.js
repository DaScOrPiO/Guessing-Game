'use strict';

const input = document.querySelector('.guess');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreBoard = document.querySelector('.score');
const HighScoreBoard = document.querySelector('.highscore');
const guessBoard = document.querySelector('.number');
const reset = document.querySelector('.again');

let selectedNum = Math.floor(Math.random() * 20);
let score = 20;
let highestscore = 0;

function game() {
    check.addEventListener('click', (e) => {
        if (score >= 1) {
            let chosenNum = Number(input.value);
            guessBoard.textContent = chosenNum;
            if (!chosenNum) {
                message.textContent = 'Please Enter A Value 🤨';
            }
            else if (selectedNum > chosenNum) {
                message.textContent = 'Too Low!📉';
                guessBoard.classList.add('wrong');
                score--
            }
            else if (selectedNum < chosenNum) {
                message.textContent = 'Too High!📈';
                guessBoard.classList.add('wrong');
                score--;
            }
            else if (selectedNum === chosenNum) {
                message.textContent = 'correct!🎉';
                document.body.style.backgroundColor = '#60b347';
                guessBoard.classList.remove('wrong');
                highscore();
            }
            displayScores();
            console.log(selectedNum, chosenNum);
        } else {
            message.textContent = 'You Lost';
            check.setAttribute('disabled', '');
            input.setAttribute('readonly', '');
            document.body.style.backgroundColor = '#cc1616';
        }
    });
    reset.addEventListener('click', () => {
        selectedNum = Math.floor(Math.random() * 20);
        score = 20;

        message.textContent = 'Start guessing...';
        scoreBoard.textContent = score;
        HighScoreBoard.textContent = highestscore;
        guessBoard.textContent = '?';
        document.body.style.backgroundColor = '#222';
        document.body.style.color = '#eee';
        input.value = '';
    });
}

game();

function displayScores() {
    scoreBoard.textContent = score;
}

function highscore() {
    if (score > highestscore) {
        highestscore = score;
        HighScoreBoard.textContent = highestscore;
    }
}