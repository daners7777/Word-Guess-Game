//JavaScript doesn't get run until the HTML is finished loading
$(document).ready(function() {

//array to list names
let names = ["link", "zelda", "ganondorf", "skullkid", "saria", "epona", "tingle", "shiek"]

//defined variables
let wins = 0
let noOfGuesses = 5
let randomWord
let loseGuess

//Event after key is released ensuring only letters are used
$(document).keyup(function(event) {
    if (aToZ(event.key)) {
        letterValidate(event.key)
    }
function aToZ (char){
    return /^[a-zA-Z]/i.test(char);
    }
});

//Reset game function
newFunction(refreshGame);

function refreshGame() {
    loseGuess = noOfGuesses
    
    // randomizes name choices
    randomWord = names[Math.floor(Math.random() * names.length)]

    // Empty arrays to fill with variables
    guesses = []
    currentName = []

    //Clears word after guess
    for (let i=0, j=randomWord.length; i < j; i++){
        //Creates a space for more than one word names
        if (randomWord[i] === " ") {
            currentName.push(" ")
        } else {
        currentName.push("_")
        }
    }
    refreshScreen()
}

// Function to display user guesses, wins, and letters used
function refreshScreen () {
document.getElementById("wins-display").innerHTML = wins
document.getElementById("current-display").innerHTML = currentName.join("");
document.getElementById("remaining-display").innerHTML = loseGuess
document.getElementById("letters-display").innerHTML =  guesses
}

function letterValidate(letter) {
    let foundLetter = false
    
    //Find the letter in the string
    for (let i=0, j= randomWord.length; i<j; i++) {
        if (letter === randomWord[i]) {
            currentName[i] = letter
            foundLetter = true
            
    // If guessing word matches random word
    if (currentName.join("") === randomWord) {
        //The wins go up by one
        wins++
        
        refreshScreen()
        //Timer before changing words
        window.setTimeout(refreshGame, 2500)
        }
    }
}

if (!foundLetter) {
    
    //looks for wrong letter guess
    if (!guesses.includes(letter)) {
        //put letter in already guessed letters
        guesses.push(letter)
        // Total guesses goes down by 1
        loseGuess--
    }
    if (loseGuess === 0) {
        
       //Timer before changing words
        window.setTimeout(refreshGame, 2500)
    }
}
refreshScreen()
}     

function newFunction(refreshGame) {
refreshGame();
}

});


