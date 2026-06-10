const b1 = document.getElementById('1');
const b2 = document.getElementById('2');
const b3 = document.getElementById('3');
const b4 = document.getElementById('4');
const b5 = document.getElementById('5');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const gameCounter = document.getElementById('gameCounter');
let gameCount = 1
let guessCount = 0
let randNum = 0

function setRnum() {
     randNum = Math.floor(Math.random() * 5) + 1;   // random number between 1 and 5 inclusive
}

function guesses() {
     
}
function ACheck(e){
     let guess = e.target.id;
     guessCount++
     guessCounter.innerHTML = guessCount + " guess(es)"
     if (guess == randNum){
          if (guess != 1) { b1.style.display='none'; };
		if (guess != 2) { b2.style.display='none'; };
		if (guess != 3) { b3.style.display='none'; };
		if (guess != 4) { b4.style.display='none'; };
		if (guess != 5) { b5.style.display='none'; };

     gotIt()
     } if (guess != randNum){

     e.target.style.display = 'none';
     notGotIt()
     }
     
}

function gotIt(){
     result.innerHTML = "<p>You Win!</p>";
     gameCount = gameCount + 1;
     gameCounter.innerHTML = (`game ${gameCount}`);
     
}

function notGotIt(){
}

function setEListeners(){
     b1.addEventListener('click', ACheck);
     b2.addEventListener('click', ACheck);
     b3.addEventListener('click', ACheck);
     b4.addEventListener('click', ACheck);
     b5.addEventListener('click', ACheck);

}

function RemoveEListeners(){

}

function retry() {

}

//makeitwork

 setRnum();
 setEListeners();
 console.log(randNum)