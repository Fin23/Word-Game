//Global Variables
//=============================================================
//create an array of words
var words = ['red', 'blue', 'silver', 'white', 'black', 'brown', 'grey', 'orange', 'tan', 'pink']
//choose word randomly
var wins = 0;
var loss = 0;
var randNum = Math.floor(Math.random() * words.length);
var choosenWord = words[randNum];
var rightWord = [];
var wrongWord = [];
var underScore = [];


// Dom manipulation
var docUnderScore = document.getElementsByClassName('underscore');
var docRightGuess = document.getElementsByClassName('rightguess');
var docWrongGuess = document.getElementsByClassName('wrongguess');

//main
//==========================================================
console.log(choosenWord);

//create an alert that starts game and generates the underscores 
function myFunction() {
    var txt;
    if (confirm("Press OK to Start")){
        
        txt="Start Typing idiot!";
        //create underscores based on length of word

var generateUnderscore = () => {
    for ( var i = 0; i < choosenWord.length; i++){
    underScore.push('_');
    }
    return underScore;
    }
    generateUnderscore();
    //get users guess
    // using key code/ index of method
    
    document.addEventListener('keypress', (event) => {
       
    var keyword = String.fromCharCode(event.keyCode);
    
    //if users guess is right 
    
    if(choosenWord.indexOf(keyword) > -1){
        
    //add to right words array
    
    rightWord.push(keyword);
    
    //replace underscore with right letter
    
    underScore[choosenWord.indexOf(keyword)] = keyword;
    docUnderScore[0].innerHTML = underScore.join('  ');
    docRightGuess[0].innerHTML = rightWord;
    
    //checks to see if user word matches guesses
    
    if(underScore.join('') == choosenWord){
    alert('Winner Winner Chicken Dinner');
    }
    }
    else {
    wrongWord.push(keyword);
    docWrongGuess[0].innerHTML = wrongWord;
    }
    });
    
    
    //tyring to manipulate the html text 

    } else{
        txt = "You pressed Cancel";
    }
    document.getElementById("demo").innerHTML = txt;
}







