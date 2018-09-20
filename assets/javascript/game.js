//create html shell which includes title, instructions, and other sub sections
//create list of possibile words to be drawn from

var hawkIcons = ["kinnick", "long", "banks", "greene"];

//logic to add a number of underlines which corresponds to the number of letters in a word
var chosenWord = hawkIcons[0];
for (i = 0; i < hawkIcons.length; i++) {
  console.log(hawkIcons[i]);
}
// console.log(chosenWord)

//determine if guess is in chosenWord

//if no = badGuess
var badGuess = "";
//display # of badGuess
var guessesRemaining = 15 - badGuess;
console.log(guessesRemaining);

//if yes = rightGuess
var rightGuess = "";
//display in place of underline text

//show already guessed letters
// document.getElementById("guessed").innerHTML = {onkeyup = function(event) {
//   userText.textContent = event.key;
// }}


// var lettersGuessed

// document.getElementById("demo").innerHTML = 5 + 6;

// console.log.on('keyup', function(event) {
// if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
//   alert('Undo!')
// }
//   });
// Let's start by grabbing a reference to the <span> below.
var userGuess = document.getElementById("guessed");
document.onkeyup = function(event) {
  userGuess.textContent = event.key;
  ("guessed").append(" " + event.key) 
};



//if number of guesses remaining = 0, display "Game over"
//if word complete, display "You Win!" or something fancier if i have time

var wins;
