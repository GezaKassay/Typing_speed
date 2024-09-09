let noPushSpace = 0;

const words = [["color gift eat pain popular average possible tube retain" + 
    " digress"], ["incongruous stunning excess revenge banner fortune user " +
    "site harass criminal"], ["snarl facility distribute tray ice speed rib " +
    "section spot bless"], ["resignation stress smell conceive remark charter" +
    " dead hotdog habitat courtship"]]

let displayWords = words[0];

function displaysWords() {
    document.getElementById("wordsToDisplay").innerHTML = displayWords;
}
displaysWords();    
    
function checkDisplayedtoTyped() {
    let word = [document.getElementById("typeWords").value];
    let letterPos = 0;
    for (let i = 0; i < 1; ++i) {
        for (let j = 0; j < words[i].length; ++j) {
            if (word[letterPos] === words[i][j]) {
                words[i][j].style.color = "green";
            } else {
                words[i][j].style.color = "red";               
            }
            ++letterPos;
        }
    }
}    
checkDisplayedtoTyped();    
    
    