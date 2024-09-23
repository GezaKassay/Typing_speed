let noPushSpace = 0;

const words = [["color gift eat"], ["color gift eat pain popular average possible tube retain" + 
    " digress"], ["incongruous stunning excess revenge banner fortune user " +
    "site harass criminal"], ["snarl facility distribute tray ice speed rib " +
    "section spot bless"], ["resignation stress smell conceive remark charter" +
    " dead hotdog habitat courtship"]]

let displayWords = words[1];
let text = displayWords[0];
let spannedText;

function spanText(text) {   
    let characters = text.split("");
    let num = 0;   
    spannedText = characters.map(char => `<span id="${++num}">${char}</span>`).join("");
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
                 
function checkDisplayedtoTyped() {
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
}    


window.addEventListener("keydown", function (checkWord) {         
    if (checkWord.code === "Space") { 
        checkDisplayedtoTyped();
        document.getElementById("typeWords").value = "";       
    }        
});
    
    