let noPushSpace = 0;

const words = [["color gift eat"], ["color gift eat pain popular average possible tube retain" + 
    " digress"], ["incongruous stunning excess revenge banner fortune user " +
    "site harass criminal"], ["snarl facility distribute tray ice speed rib " +
    "section spot bless"], ["resignation stress smell conceive remark charter" +
    " dead hotdog habitat courtship"]]

let displayWords = words[0];
let displayWordsGreen = words[0];

function displaysWords() {
    document.getElementById("wordsToDisplay").innerHTML = displayWords;
    document.getElementById("greenWordsToDisplay").innerHTML = displayWordsGreen;
}
displaysWords();

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;    
    return str.substring(0, index) + chr + str.substring(index + 1);
}

let checkPos = 0;
let letterPos = 0;

function checkDisplayedtoTyped() {
    let word = document.getElementById("typeWords").value;        
    for (let i = 0; i < displayWords.length; ++i) {                                   
        for (let j = checkPos; j < displayWords[i].length; ++j) {
            if (word[letterPos] === displayWords[i][j]) {              
                //alert("match");              
                displayWords[i] = setCharAt(displayWords[i], j, displayWordsGreen[i][j]);
                displaysWords();                
            } else if (displayWords[i][j] != " ") {                
                alert("noMatch");             
            }
            ++letterPos;
            if (displayWords[i][j] === " ") {
                checkPos = j + 1;
                letterPos = 1;   
                j = displayWords[i].length;                    
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
    
    