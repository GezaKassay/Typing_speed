const DELAY_TIME = 1000;
const TEN = 10;

const words = [["color gift eat pain popular average possible tube retain" + 
    " digress"], ["incongruous stunning excess revenge banner fortune user " +
    "site harass criminal"], ["snarl facility distribute tray ice speed rib " +
    "section spot bless"], ["resignation stress smell conceive remark charter" +
    " dead hotdog habitat courtship"], ["month pat boom legislature stand face" +
    " embox experienced urge slot"]];

let displayWords;
let wordsPos = -1;
let text;

function changeDisplayWords() {
    displayWords = words[++wordsPos]; 
    text = displayWords[0];          
}
changeDisplayWords();

let spannedText;
let num = 0; 

function spanText(text) {   
    let characters = text.split("");      
    spannedText = characters.map(char => `<span id="${++num}">${char}`+
        `</span>`).join("");
    return spannedText;
}

function displaysWords() {
    document.getElementById("wordsToDisplay").innerHTML = spanText(text); 
}
displaysWords();

let elmID = 0;

function changeToGreen() {
    document.getElementById(++elmID).classList.add("green"); 
}

function changeToRed() {
    document.getElementById(++elmID).classList.add("red"); 
}

let checkPos = 0;
let letterPos = 0;
let correctWords = 0;
let incorrectWords = 0;
                 
function checkWord() {
    let word = document.getElementById("typeWords").value;
    let match = 0;
    let noMatch = 0;         
    for (let i = 0; i <  displayWords.length; ++i) {                             
        for (let j = checkPos; j < displayWords[i].length; ++j) {              
            if (word[letterPos] === displayWords[i][j]) {                                                              
                changeToGreen();
                ++match;                               
            } else if (displayWords[i][j] != " ") {                        
               changeToRed();
               ++noMatch;                                    
            }            
            ++letterPos;
            if (displayWords[i][j] === " ") {
                checkPos = j + 1;
                letterPos = 1;   
                j = displayWords[i].length;                    
                ++elmID;                    
            }            
        }        
    } 
    if (noMatch > 0) {
        ++incorrectWords;
    } else {
        ++correctWords;
    }    
    match = 0;
    noMatch = 0; 
    if ((correctWords + incorrectWords)  % TEN === 0) {
        changeDisplayWords();
        displaysWords();
        letterPos = 1;
        checkPos = 0;           
    }     
}    

let keyPressInstance = 0;

window.addEventListener("keydown", function (key) {         
    if (key.code === "Space") { 
        checkWord();        
        document.getElementById("typeWords").value = "";              
    }
    if (keyPressInstance == 0) {
        startTimer(); 
        ++keyPressInstance;
    }       
});

let time = 60;
let intervalID;

function decreaseTime() {    
    --time;
    document.getElementById("Time").innerHTML = time;
    if (time === 0) {
        clearInterval(intervalID);
        document.getElementById("typeWords").readOnly = true; 
        displayFinalMessage();      
    }    
}
    
function startTimer() {
    document.getElementById("Time").innerHTML = time;
    intervalID = setInterval(decreaseTime, DELAY_TIME);    
}

function displayFinalMessage() {
    document.getElementById("finalMessage").innerHTML = `You have typed` + 
        ` ${correctWords} word(s) correctly out of` + 
        ` ${correctWords + incorrectWords}`;
}