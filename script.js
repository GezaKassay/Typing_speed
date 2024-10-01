const DELAY_TIME = 1000;
const TEN = 10;
const WORDS = ["color gift eat pain popular average possible tube retain digress"
    , "incongruous stunning excess revenge banner fortune user site harass " + 
    "criminal", "snarl facility distribute tray ice speed rib section spot bless"
    , "resignation stress smell conceive remark charter dead hotdog habitat " + 
    "courtship", "month pat boom legislature stand face embox experienced urge" + 
    " slot"];

let displayWords;
let wordsPos = -1;
let text;

function wordsToDisplay() {
    displayWords = WORDS[++wordsPos]; 
    text = displayWords;          
}
wordsToDisplay();

let spanId = 0;

function addSpantoChar(text) {   
    let characters = text.split("");      
    let spannedText = characters.map(char => `<span id="${++spanId}">${char}`+
        `</span>`).join("");
    return spannedText;
}

function displaysWords() {
    document.getElementById("wordsToDisplay").innerHTML = addSpantoChar(text); 
}
displaysWords();

let elementId = 0;
let checkPos = 0;
let letterPos = 0;
let correctWords = 0;
let incorrectWords = 0;
let notMatching = 0;
let color; 
                 
function checkWord() { 
    let word = document.getElementById("typeWords").value;           
    for (let i = checkPos; i < displayWords.length; ++i) {                                         
        if (word[letterPos] === displayWords[i]) {                                                              
            color = "green";
            changeColor();                                          
        } else if (displayWords[i] != " ") {                        
            color = "red";
            changeColor();
            ++notMatching;                                    
        }            
        ++letterPos;
        if (displayWords[i] === " ") {
            checkPos = i + 1;
            letterPos = 1;   
            i = displayWords.length;                    
            ++elementId;                    
        }                   
    } 
    if (notMatching > 0) {
        ++incorrectWords;
    } else {
        ++correctWords;
    }   
    notMatching = 0;
    displayNextSetWords();
}

function changeColor() {
    document.getElementById(++elementId).classList.add(color);     
}

function displayNextSetWords() {
    if ((correctWords + incorrectWords) % TEN === 0) {
        wordsToDisplay();
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
    if (keyPressInstance === 0) {
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