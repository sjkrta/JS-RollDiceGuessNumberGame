'use strict';
let scoreInt = 20;
let secretNumber = Math.round((Math.random() * 20 + 1));
const body = document.querySelector('body');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const again = document.querySelector('.again');
const highscore = document.querySelector('.highscore');
let score = document.querySelector('.score');


check.addEventListener('click', function () {
    if (guess.value > 0 && guess.value <= 20 && scoreInt >= 1 && guess.value != '') {
        if (guess.value == secretNumber) {
            message.textContent = 'correct';
            body.style.backgroundColor = 'green';
            number.style.width = '30rem';
            number.textContent = secretNumber;
            if (highscore.textContent < scoreInt) {
                highscore.textContent = scoreInt
            }
        }
        else if (number.textContent == '?') {
            if (guess.value < secretNumber) {
                message.textContent = 'Low!!'
                scoreInt -= 1
                score.textContent = scoreInt
            }
            else if (guess.value > secretNumber) {
                message.textContent = 'High!!'
                scoreInt -= 1
                score.textContent = scoreInt
            }
        }
    }
    else if (scoreInt == 0) {
        message.textContent = 'Game Over!! Play again??'
    }
})
again.addEventListener('click', function () {
    scoreInt = 20;
    score.textContent = scoreInt;
    secretNumber = Math.round((Math.random() * 20 + 1));
    message.textContent = "Start guessing...";
    body.style.backgroundColor = 'black';
    number.style.width = '15rem';
    guess.value = '';
    number.textContent = '?';
})
