let noPushSpace = 0;

const words = [["color gift eat"], ["color gift eat pain popular average possible tube retain" + 
    " digress"], ["incongruous stunning excess revenge banner fortune user " +
    "site harass criminal"], ["snarl facility distribute tray ice speed rib " +
    "section spot bless"], ["resignation stress smell conceive remark charter" +
    " dead hotdog habitat courtship"]]

let displayWords = words[0];
let text = displayWords[0];

function spanText(text) {    
    return "<span class=char>" +
        text.split("").join("<\/span><span class=char>") + "<\/span>";
}

function displaysWords() {
    document.getElementById("wordsToDisplay").innerHTML = spanText(text);   
   // document.getElementById("wordsToDisplay").innerHTML = displayWords; 
}
displaysWords();

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;    
    return str.substring(0, index) + chr + str.substring(index + 1);
}

let checkPos = 0;
let letterPos = 0;
const element = document.querySelector('#wordsToDisplay');
                 
function checkDisplayedtoTyped() {
    let word = document.getElementById("typeWords").value;
    //spanText(word);
    //document.getElementById("test").textContent = spanText(word);       
    for (let i = 0; i <  displayWords.length; ++i) {                      
        for (let j = checkPos; j < displayWords[i].length; ++j) {                                          
            if (word[letterPos] === displayWords[i][j]) {              
                alert("match");
                document.getElementsByClassName("char").className = "green";                            
               // displayWords[i] = setCharAt(displayWords[i], j,
               //     '<span style="color: red;">c</span>');                                                
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
    
    