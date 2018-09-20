//create html shell which includes title, instructions, and other sub sections
//create list of possibile words to be drawn from
var hawkIcons = [
  "kinnick",
  "long",
  "banks",
  "greene",
  "duncan",
  "shaw",
  "tate",
  "sanders",
  "gallery"
];

// pick random word out of icons list
var wordPick = hawkIcons[Math.floor(Math.random() * hawkIcons.length)];
console.log(wordPick)

//adds underscores for picked word
var underlineWord = "";

for (i = 0; i < wordPick.length; i++) {
  underlineWord += "_ ";
}
document.getElementById("spaces").innerHTML = underlineWord + "_ ";

//prints the letter you type to the page
document.onkeyup = function(event) {
  var userInput = event.key;
if (wordPick.indexOf(userInput) < 0 )  
document.getElementById("guessed").innerHTML = userInput;
}
// function showLetter() {
//   document.getElementById("guessed").innerHTML = onkeyup.char;
//  onclick(showLetter())
// }


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

// document.onkeyup = function(){myScript};
// userGuess.textContent = event.key;
// ("guessed").append(" " + event.key)

//if number of guesses remaining = 0, display "Game over"
//if word complete, display "You Win!" or something fancier if i have time

// var wins;
