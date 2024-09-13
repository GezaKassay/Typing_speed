let noPushSpace = 0;

const words = [["color gift eat"], ["color gift eat pain popular average possible tube retain" + 
    " digress"], ["incongruous stunning excess revenge banner fortune user " +
    "site harass criminal"], ["snarl facility distribute tray ice speed rib " +
    "section spot bless"], ["resignation stress smell conceive remark charter" +
    " dead hotdog habitat courtship"]]

let displayWords = words[0];

function displaysWords() {
    document.getElementById("wordsToDisplay").innerHTML = displayWords;
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
    for (let i = 0; i < 1; ++i) {
        for (let j = 0; j < displayWords.length; ++j) {                                   
            for (let k = checkPos; k < words[i][j].length; ++k) {
                if (word[letterPos] === words[i][j][k]) {              
                    alert("match"); 
                 
                  
                // displayWords = setCharAt(displayWords, k, "_");
                // displaysWords();                  
                } else if (words[i][j][k] != " ") {                
                    alert("noMatch");             
                }
                ++letterPos;
                if (words[i][j][k] === " ") {
                    checkPos = k + 1;
                    letterPos = 1;   
                    k = words[i][j].length;                    
                }
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
    
    