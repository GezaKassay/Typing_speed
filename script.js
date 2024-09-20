let noPushSpace = 0;

const words = [["color gift eat"], ["color gift eat pain popular average possible tube retain" + 
    " digress"], ["incongruous stunning excess revenge banner fortune user " +
    "site harass criminal"], ["snarl facility distribute tray ice speed rib " +
    "section spot bless"], ["resignation stress smell conceive remark charter" +
    " dead hotdog habitat courtship"]]

let displayWords = words[0];
let text = displayWords[0];
let spannedText;

function spanText(text) {   
    let characters = text.split("");
    let num = 0;   
    spannedText = characters.map(char => `<span id="${++num}">${char}</span>`).join("");
    return spannedText;
}

function displaysWords() {
    document.getElementById("wordsToDisplay").textContent = spanText(text);  
    //textContent
}
displaysWords();

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;    
    return str.substring(0, index) + chr + str.substring(index + 1);
}

let checkPos = 0;
let letterPos = 0;
let charClass = 0;
                 
function checkDisplayedtoTyped() {
    let word = document.getElementById("typeWords").value;         
    for (let i = 0; i <  displayWords.length; ++i) {                      
        for (let j = checkPos; j < displayWords[i].length; ++j) {                                          
            if (word[letterPos] === displayWords[i][j]) {              
                alert("match");
                let geth1 = document.getElementById("wordsToDisplay");
                geth1.getElementById("1").classList.add("green");                                        
                //displaysWords();                               
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
    
    