//create an array of words
const words = ['Rockos Modern Life', 'Ren and Stimpy', 'Aaahh! Real Monsters', 'Doug', 'Gargoyles', 'Hey Arnold', 'Doug', 'Darkwing Duck', 'daria', 'Pinky and The Brain']
//choose word randomly
let randNum = Math.floor(Math.random() * words.length);
let choosenWord = words[randNum];
let underScore = [];
//create underscores based on length of word
let generateUnderscore = ( ) => {
    for ( let i = 0; i< choosenWord.length; i++){
            underScore.push('_');
    }
    return underScore;
}


//get users guess
//check if guess is right 
// if right push to right array
// if wrong push to wrong array