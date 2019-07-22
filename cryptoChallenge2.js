var fs = require("fs");
var allWords = [];
var values = [];

fs.readFile("text/message.txt", "utf8", doSomething);

function doSomething(error, contents) {
    allWords = contents.split("\n");
    // allWords = ["abcd"]
    fs.readFile("text/shift-values.txt", "utf8", doSomethingElse);
}

function doSomethingElse(error, contents) {
    values = contents.split("\n");
    shift();
}

function shift() {
    var allLetters = "";
    for (var i = 0; i < allWords.length; i++) {
        for (var j = 0; j < allWords[i].length; j++) {
            var char = allWords[i][j]
            if ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(char)) {
                // lowercase
                if (char.toLowerCase() == char) {
                    char = shiftThis(97, char, i);
                }
                else { // lowercase
                    char = shiftThis(65, char, i);
                }
            }
            allLetters += char;
        }
        allLetters += "\n";
    }
    console.log(allLetters)
}

function shiftThis(base, char, i) {
    var num = char.charCodeAt();
    num -= base;
    num -= parseInt(values[i], 10);
    num += 26; // make sure num is always positive
    num = num % 26;
    num += base;
    return String.fromCharCode(num);
}
