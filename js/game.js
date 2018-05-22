var wordBank = ["first", "second", "third", "fourth"];
var stageWord = [];
var chosenWord ="";

//computer randomly selects a word from wordBank

function setWord(){
    chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    for (i=0; i < chosenWord.length; i++){
        stageWord[i] = "_";
    };
    
    return chosenWord;
}

setWord();

// listen for user input and check validity
var userMisses = 7;

// variable to track all the letters already guessed
var guessLog = [];

// This function is run whenever the user presses a key.
    // ++function(event)
document,onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // variable to track if userGuess is in the chosenWord
    var inWord = false;

    // ++if
    if (guessLog.includes(userGuess,0,) == false) {
        //do nothing if guessLog contains userGuess
        // if inWord is found false, user loses 1 remaining try
        if (inWord == false) {
            userMisses -= 1;
            console.log(userMisses);
            guessLog.push(userGuess);
        };  
        // ++for
        for (i=0; i < chosenWord.length; i++){
            if (userGuess == chosenWord[i]){
                stageWord[i] = chosenWord[i];
                console.log(stageWord);
                
                //sets the the state of userGuess as being in chosenWord
                var inWord = true;
                // --if
        };  // --for
            
    };
        
    } // --if
        
        //function to print the stageWord
        var presentHTML = "";
        function printStageWord() {
            for (i=0; i < stageWord.length; i++) {
                presentHTML += " " + stageWord[i];
            }
            return presentHTML;
        }
        
        
        
        // Creating a variable to hold our new HTML. Our HTML now keeps track of the userguesses computer guesses, user tries remaining .
        var html =
        "<p>You Chose: " + userGuess + "!</p>" +
        "<p>Word to guess: " + printStageWord() + "</p>" +
        "<p>remaining guesses: " + userMisses + "</p>" +
        "<p>guesses: " + guessLog + "</p>"; // +
        // "<p>ties: " + ties + "</p>";
        
    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
    
    
    // check current stageWord against chosenWord to see if user has won
    
    

}
// --function(event)



console.log(chosenWord);
console.log(chosenWord.length);
console.log(stageWord);