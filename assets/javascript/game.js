
//Pseudo code iteration:
// create word repository using array

//have computer pick random word out of array using math.random

//based on the number of letters in the word, print that number of spaces to the dom using a for loop

//when user types in a letter, game must validate if letter is in the word
    //1. If: letter is in word, game should find the index of the correct letter in the string, and replace the space with the letter
    //2. Else: ((display letter in list of "chosen letters") and (subtract one from guess total))

//If guess count variable = 0
    //alert game over notification
    //Add one to loss total
    //Reset guess total variable
    //Clear guessed letters list

//If number of underscores displayed on screen = 0, user wins game
    //Add one to win total
    //Reset guess total variable
    //Clear guessed letters list

//Tom's actual attempts:
//list of possible Iowa Hawkeye greats to choose from
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
console.log(wordPick);

//adds underscores for picked word
var underlineWord = "";
for (i = 0; i < wordPick.length; i++) {
  underlineWord += "_ ";
document.getElementById("spaces").innerHTML = underlineWord;
console.log("tom ",underlineWord);
} 

//splits the chosen word apart
var indLetters = wordPick.split("");
console.log(indLetters)



//prints the letter you type to the page
document.onkeyup = function(event) {
  var userInput = event.key;
  for (var i = 0;i < indLetters.length; i++) {
    // console.log("user input", userInput)
    // console.log("ind letters", indLetters[i])

    if (userInput === indLetters[i]) {
     var indexPosition = indLetters.indexOf(userInput);
      underlineWord[indexPosition] = userInput;
      // document.getElementById("spaces").innerHTML =
     console.log(underlineWord)
    //  console.log(indLetters.indexOf(userInput))
    //  indexOf(ind) indLetters[i] 
      console.log("same letter")
    } else (userInput != indLetters[i].toUpperCase()) 
      document.getElementById("guessed").innerHTML = userInput;  
    }
  }

  // if (wordPick.indexOf(userInput) < 0) {
  //   document.getElementById("guessed").innerHTML = userInput;
  // } else {
  //   // document.getElementById("spaces").innerHTML = underlineWord[indexOf(userInput)] === userInput;
  //   document.getElementById("spaces");
  // }
  // var res = str.replace(/blue/g, "red");
  // document.getElementById("demo").innerHTML = res;

  // document.getElementById("spaces").innerHTML = userInput)
// };

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
