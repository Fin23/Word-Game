//Global Variables
//=============================================================
//create an array of words
const words = ['Rockos Modern Life', 'Ren and Stimpy', 'Aaahh! Real Monsters', 'Doug', 'Gargoyles', 'Hey Arnold', 'Doug', 'Darkwing Duck', 'daria', 'Pinky and The Brain']
//choose word randomly
let randNum = Math.floor(Math.random() * words.length);
let choosenWord = words[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];
var wins = 0;
var loss = 0;

// Dom manipulation
let docUnderScore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightguess');
let docWrongGuess = document.getElementsByClassName('wrongguess');

//main
//==========================================================
console.log(choosenWord);
//create underscores based on length of word
let generateUnderscore = () => {
    for ( let i = 0; i < choosenWord.length; i++){
            underScore.push('_');
    }
    return underScore;
}
//get users guess
// using key code/ index of method
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
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





