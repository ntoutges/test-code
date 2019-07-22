var fs = require("fs");
var allWords = [];
var values = [];
var realWords = [];

fs.readFile("text/message2.txt", "utf8", doSomething);

function doSomething(error, contents) {
    console.log("Stage 1 Begin")
    allWords = contents.split("\n");
    fs.readFile("dictionary.txt", "utf8", findWords);
}

function findWords(error, contents) {
    var words = contents.split("\n");
    for (var i = 0; i < words.length; i++) {
        realWords[words[i].toLowerCase()] = true;
    }
    console.log("Stage 1 Complete")
    findValues();
}

function findValues() {
    console.log("Stage 2 Begin")
    for (var i = 0; i < allWords.length; i++) {
        for (var k = 0; k < 26; k++) {
            var arr = [];
            for (var j = 0; j < allWords[i].split(" ").length; j++) {
                var combo = "";
                var thisWord = allWords[i].split(" ")[j];
                for (var l = 0; l < thisWord.length; l++) {
                    var thisLetter = thisWord[l];
                    if ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(thisLetter)) {
                        if (thisLetter.toLowerCase() == thisLetter) {
                            thisLetter = shiftThis(96, thisLetter, k);
                        }
                        else {
                            thisLetter = shiftThis(65, thisLetter, k);
                        }
                        combo += thisLetter;
                    }
                }
                arr.push(combo);
            }
            var isCorrect = isCorrectKey(arr);
            if (isCorrect) {
                values.push(k);
                k = 26;
            }
        }
    }
    console.log("stage 2 Complete");
    convertAll();
}

var res = []

function isCorrectKey(chars) {
    var counter = 0;
    for (var i = 0; i < chars.length; i++) {
        // chars[i] = chars[i].replace(/^[a-zA-Z]+$/g, "");
        var wordWithoutS = chars[i].substring(0, chars[i].length - 1);
        if (".,".includes(chars[i][chars[i].length])) {
            wordWithoutS = chars[i].substring(0, chars[i].length - 2);
        }
        if (realWords[chars[i].toLowerCase()] || realWords[wordWithoutS]) {
            counter += chars[i].length;
        }
    }
    if (counter / (chars.length) > 2) {
        res.push(counter / (chars.length));
        return true;
    }
    return false;
}


function shiftThis(base, char, k) {
    var num = char.charCodeAt();
    num -= base;
    num += k;
    if (num != 26) { // allow z to come out as 122 (26), and not 96 (0)
        num += 26; // make sure num is always positive
        num = num % 26;
    }
    num += base;
    var char = String.fromCharCode(num);
    if (char == "[") { // take care of 'A'
        char = "A";
    }
    return char;
}

function convertAll() {
    var msg = "";
    for (var i = 0; i < allWords.length; i++) { // individual lines
        var str = "";
        for (var j = 0; j < allWords[i].length; j++) { // individual letters
            var letter = allWords[i][j];
            if ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(letter)) {
                if (letter.toLowerCase() == letter) {
                    letter = shiftThis(96, letter, values[i])
                }
                else {
                    letter = shiftThis(65, letter, values[i])
                }
            }
            str += letter;
        }
        console.log(str)
        // console.log(res[i])
        // console.log("-------------------------")
        msg += str;
        msg += "\n";
    }
}
