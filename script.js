// Global Variables
var pattern = []; // order of buttons to press
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var guessCounter = 0;
var volume = 0.5;
var clueHoldTime = 1000; // should decrease over time
var lives = 3;
var guessTime = 10;
var timer;
var timeout;

const nextClueWaitTime = 1000;
const cluePauseTime = 333;
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500,
  6: 550
}

// Setting Up
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

// Functions
function createPattern(n) {
  for (let i = 0; i < n; i++){
    let btn = Math.ceil(Math.random() * 6);
    pattern.push(btn);
  }
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}


function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function updateTimer() {
  guessTime--;
  document.getElementById("timer").innerHTML = `Time Left: ${guessTime}`;
  if (guessTime == 0) {
    lives--;
    if (lives == 0) {
      loseGame();
    }
    guessTime = 10;
  }
}

function setTimer() {
  timer = setInterval(updateTimer, 1000);
  document.getElementById("timer").innerHTML = `Time Left: ${guessTime}`;
  document.getElementById("timer").classList.remove("hidden");
}

function stopTimer() {
  clearTimeout(timeout);
  clearInterval(timer);
}

function playClueSequence() {
  guessCounter = 0;
  clueHoldTime -= 75;
  guessTime = 10;
  
  document.getElementById("timer").innerHTML = "Clue Playing...";
  
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++) {
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += nextClueWaitTime;
    delay += cluePauseTime;
  }
  timeout = setTimeout(setTimer, delay);
}

function guess(btn) {
  if (!gamePlaying){
    return;
  }
  // guess is not correct --> lose
  if ( btn != pattern[guessCounter] ){
    lives--;
    stopTimer();
    playClueSequence();
    if (lives <= 0) {
      loseGame();
    }
  }
  else if (guessCounter != progress){
    guessCounter++;
  }
  else if (progress != pattern.length - 1){
    progress++;
    stopTimer();
    playClueSequence();
  }
  else{
    winGame();
  }
}

function startGame(){
  gamePlaying = true;
  clueHoldTime = 1000;
  progress = 0;
  guessTime = 10;
  lives = 3;
  
  document.getElementById("start-button").classList.add("hidden");
  document.getElementById("stop-button").classList.remove("hidden");
  document.getElementById("timer").classList.remove("hidden");
  createPattern(4);
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  pattern = [];
  
  stopTone();
  stopTimer();
  clearButton("1");
  clearButton("2");
  clearButton("3");
  clearButton("4");
  
  document.getElementById("start-button").classList.remove("hidden");
  document.getElementById("stop-button").classList.add("hidden");
  document.getElementById("timer").classList.add("hidden");
}

function winGame(){
  stopGame();
  alert("Game Over. You Won!")
}

function loseGame() {
  stopGame();
  alert("Game Over. You Lost!");
}