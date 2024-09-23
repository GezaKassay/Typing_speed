const DELAY_TIME = 1000;
const TEN = 10;

const words = [["color gift eat pain popular average possible tube retain" + 
    " digress"], ["incongruous stunning excess revenge banner fortune user " +
    "site harass criminal"], ["snarl facility distribute tray ice speed rib " +
    "section spot bless"], ["resignation stress smell conceive remark charter" +
    " dead hotdog habitat courtship"]]

let displayWords;
let wordsPos = -1;
let text;

function changeDisplayWords() {
    displayWords = words[++wordsPos]; 
    text = displayWords[0];       
}
changeDisplayWords();

let spannedText;

function spanText(text) {   
    let characters = text.split("");
    let num = 0;   
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
let numWords = 0;
                 
function checkWord() {
    let word = document.getElementById("typeWords").value;         
    for (let i = 0; i <  displayWords.length; ++i) {                      
        for (let j = checkPos; j < displayWords[i].length; ++j) {                                          
            if (word[letterPos] === displayWords[i][j]) {                                                              
                changeToGreen();                               
            } else if (displayWords[i][j] != " ") {                        
               changeToRed();                           
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
    ++numWords; 
    if (numWords % TEN === 0) {
        changeDisplayWords();
        displaysWords();
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
}
    
function startTimer() {
    document.getElementById("Time").innerHTML = "60";
    intervalID = setInterval(decreaseTime, DELAY_TIME);    
}
    