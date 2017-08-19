var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guesses = 10;
var wins = 0;
var losses = 0;
var pastGuess = []

var computerGuess = letters[Math.floor(Math.random() * letters.length)];

console.log(computerGuess)


document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === computerGuess){
        wins++;
        pastGuess = [];
        guesses = 10;
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
        alert("Correct!")
    }

    else{
        guesses--;
        document.getElementById("pastGuess").innerHTML = "Previous Guess: " + userGuess;
    }

    if(guesses === 0){
        losses++;
        pastGuess = [];
        guesses = 10;
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
        alert("Chances Exhausted!")
    }

    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses Remaining: " + guesses;

}

/*
------------------------------------------------------------------------------------------------
document.onkeyup = function(event) {
	var keyHit = event.key;
	keyInputFunction(keyHit);
};


function keyInputFunction(keyHit) {

  if (keyHit == computerGuess) {
    alert("Correct!");
    wins++;
    guesses === 10;
  }

  else if (keyHit !== computerGuess) {
  	losses++;
  }

  else if (guesses === 0) {
    alert("Guesses Expended!")
  }

  	document.getElementById("wins").innerHTML == 0;
	document.getElementById("losses").innerHTML == 0;
	document.getElementById("guesses").innerHTML == 10;
}

-----------------------------------------------------------------------------------------------


function checkGuess() {
  var userGuess = Number(enterGuess.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }

if (userGuess == computerGuess) {

}

else if (userGuess !== computerGuess) {

}

else {
	alert("You need to type a lowercase letter to make a guess!")
}
*/