// var fs = require("fs");

var letterFrequency = {};

// fs.readFile("text/message3.txt", "utf8", countLetters);

var request = new XMLHttpRequest();
request.open("GET", "text/message3.txt");
request.addEventListener("load", countLetters);
request.send();

function countLetters() {
    var contents = this.response;
    console.log("start");
    console.log("----------------------");
    for (var i = 0; i < contents.length; i++) {
        if ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(contents[i])) {
            if (letterFrequency[contents[i].toLowerCase()]) {
                letterFrequency[contents[i].toLowerCase()]++;
            }
            else {
                letterFrequency[contents[i].toLowerCase()] = 1;
            }
        }
    }
    letterFrequency = sort(letterFrequency);
    var order = convertLetters(letterFrequency, contents);
    console.log(order);
}

function sort(dict) {
    var newDict = {};
    var highestNum = [0, ""];
    var counter = 0;
    for (let key in dict) {
        for (let key2 in dict) {
            if (dict[key2] > highestNum[0]) {
                highestNum = [dict[key2], key2];
            }
        }
        newDict[highestNum[1]] = counter;
        counter++;
        dict[highestNum[1]] = 0;
        highestNum = [0, ""];
    }
    console.log("sorted");
    console.log("----------------------");
    return newDict;
}

var frequencies = ["e", "t", "a", "o", "i", "n", "s", "r", "h", "d", "l", "m", "u", "c", "f", "y", "w", "p", "g", "b", "v", "k", "x", "j", "q", "z"];

function convertLetters(letters, message) {
    // console.log(letters)
    message = message.split(" ");
    var newMessage = "";
    for (var i = 0; i < message.length; i++) { // words
        for (var j = 0; j < message[i].length; j++) { // letters
            var letter = message[i][j];
            if ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(letter)) {
                var upperCase = false;
                if (letter == letter.toUpperCase()) {
                    letter = letter.toLowerCase();
                    upperCase = true;
                }
                if (upperCase) {
                    newMessage += frequencies[letters[letter]].toUpperCase();
                }
                else {
                    newMessage += frequencies[letters[letter]];
                }
            }
            else {
                newMessage += letter;
            }
        }
        newMessage += " ";
    }
    console.log("decoded");
    console.log("----------------------");
    return newMessage;

}
