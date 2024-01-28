'use strict';

// Selecting elements
const ply0El = document.querySelector('.player--0');
const ply1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const curr0El = document.getElementById('current--0');
const curr1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold= document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

const switchPly = function() {
    document.getElementById(`current--${activePly}`).textContent = '0';
    activePly = activePly === 0 ? 1 : 0;
    currScore = 0;
    ply0El.classList.toggle('player--active');
    ply1El.classList.toggle('player--active');
}
// Starting conditions
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');

let playing = true; // state variable for current playing nature
const scores = [0,0];
let activePly = 0;
let currScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
  if(playing) {
    const dice = Math.trunc(Math.random() * 5) + 1;
  
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
  
    if(dice !== 1) {
      currScore += dice;
      document.getElementById(`current--${activePly}`).textContent = currScore;
  
    } else {
      switchPly();
    }
  }
})

btnHold.addEventListener('click', function() {
  if(playing) {
    scores[activePly] += currScore;
    document.getElementById(`score--${activePly}`).textContent = scores[activePly];
  
    if(scores[activePly] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePly}`).classList.add('player--winner');
      document.querySelector(`.player--${activePly}`).classList.remove('player--active');
    } else {
      switchPly();
  }
  }
})

btnNew.addEventListener('click', function() {
  playing = true;
  
  scores[0] = 0;
  scores[1] = 0;
  currScore = 0;
  document.querySelector(`.player--${activePly}`).classList.remove('player--winner');
  activePly = 0;
  ply0El.classList.add('player--active');
  score0El.textContent = 0;
  score1El.textContent = 0;
  curr0El.textContent = 0;
  curr1El.textContent = 0;
})