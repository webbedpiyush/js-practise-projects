'use strict';

// document.querySelector(".message").textContent = "correct guess";

let num = Math.trunc((Math.random()*20) + 1);
let score = 20;
let highSc = document.querySelector('.highscore').textContent;
// document.querySelector('.number').textContent = num;

document.querySelector('.check').addEventListener('click' , function() {
  const guess = Number(document.querySelector('.guess').value);
  if(!guess) {
    document.querySelector('.message').textContent = "No Number is Entered!"
  } else if(guess === num) {
    document.querySelector('.message').textContent = "Correct Guess!!";
    document.querySelector('.number').textContent = num;
    document.querySelector('body').style.backgroundColor = "#60b347";
    document.querySelector('.number').style.width = '30rem';
    if(score > highSc) {
      document.querySelector('.highscore').textContent = score;
      highSc = score;
    }

  } else if(guess > num) {
    if(score > 1) {
    document.querySelector('.message').textContent = "Too High!";
    score--;
    document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = "You lost the game!";
      document.querySelector('.score').textContent = '0';
    }
    
  } else if(guess < num) {
    if(score > 1) {
      document.querySelector('.message').textContent = "Too Low!";
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = "You lost the game!";
      document.querySelector('.score').textContent = '0';
    }
    
  }

})


document.querySelector('.again').addEventListener('click' , function() {
  score = 20;
  num = Math.trunc((Math.random()*20) + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = "Start guessing...";
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})
