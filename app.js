/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score, roundScore,gamePlaying;

  function init(){
  score = [0,0];
  roundScore = 0;
  activePlayer = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.btn-roll-2').style.display = 'block';
  document.querySelector('.btn-roll').style.display = 'none';
}

  init();
var lastDice;

  //roll button - run code
  document.querySelector('.btn-roll').addEventListener('click', function(){
diceroll();})

document.querySelector('.btn-roll-2').addEventListener('click', function(){
diceroll();})
  //hold button
  document.querySelector('.btn-hold').addEventListener('click', function()
  {
    score[activePlayer] += roundScore;

    //update UI
    document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
    // choose score
    var input = document.querySelector('.choosescore').value;

    var winningScore;


  if (input){
     winningScore = input;
     console.log(winningScore);
  }else {
     winningScore = 100;
     console.log(winningScore);
   }
    //check for winner
  if (score[activePlayer] == winningScore){
    document.querySelector('#name-' + activePlayer).textContent = 'Winner';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.querySelector('.btn-roll').style.display = 'none';
    document.querySelector('.btn-roll-2').style.display = 'none';
    document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');

  }else if (score[activePlayer] > winningScore){
    document.querySelector('#name-' + activePlayer).textContent = 'You Lost';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.querySelector('.btn-roll').style.display = 'none';
    document.querySelector('.btn-roll-2').style.display = 'none';
    document.querySelector('.player-' + activePlayer +'-panel').classList.add('looser');

  }else{
    //next player
    nextPlayer();
    }
})

function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
console.log(activePlayer);
  //erase score and restart the counter
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  //toggle active player display
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dice2').style.display = 'none';

  if(activePlayer === 0){
    document.querySelector('.btn-roll-2').style.display = 'block';
    document.querySelector('.btn-roll').style.display = 'none';
  } else{
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-roll-2').style.display = 'none';
  }
  }

  // new game button
  document.querySelector('.btn-new').addEventListener('click', function(){

  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dice2').style.display = 'none';
  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';
  // document.querySelector('.btn-roll').style.display = "block";
  document.querySelector('.player-0-panel').classList.remove('looser');
  document.querySelector('.player-1-panel').classList.remove('looser');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  //remove the active player class and set to active player 1 is done on The
//init function
  init();

});

function diceroll(){
  //dice init
var dice = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;

  //dice DOM manipulation
var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';
  console.log(dice);


  var diceDOM = document.querySelector('.dice2');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice2 + '.png';
    console.log(dice2);


if (dice === 6 && dice2 === 6){
    score[activePlayer] = 0;
    document.querySelector('#score-' + activePlayer).textContent = '0';
    nextPlayer();

    //rule implimentation
  }else if (dice !== 1 && dice2 !== 1) {
    //add score
    roundScore += dice + dice2;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;

  }else {
      diceDOM.style.display = 'none';
      //Next PLAYER
      nextPlayer();
      }
    };
