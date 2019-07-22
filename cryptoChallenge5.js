var fs = require("fs");
const repeatFor = Math.pow(2, 16);
var msg = "";

fs.readFile("text/message4.txt", "utf8", readFile);

function readFile(error, contents) {
    console.log("start");
    console.log("----------");
    msg = convertToBinary(contents);
    fs.readFile("dictionary.txt", "utf8", findDict);

}

function findDict(error, contents) {
    findKey(contents, msg);
}

function convertToBinary(str) {
    str = str.split("");
    var array = [];
    for (var i = 0; i < str.length; i++) {
        // to decimal
        str[i] = str[i].charCodeAt();
        // to binary
        str[i] = str[i].toString(2);
        // add extra zero(s)
        var repeatThis = (16 - str[i].length);
        for (var j = 0; j < repeatThis; j++) {
            str[i] = "0" + str[i];
        }
        array.push(str[i].toString(2));
    }
    console.log("Translated");
    console.log("----------");
    return array;
}

var highestScore = 0;

function findKey(dict, contents) {
    for (var i = 0; i < repeatFor; i++) {
        var chars = "";
        for (var k = 0; k < contents.length; k++) {
            var xOrString = performXOR(contents[k], i);
            chars += convertToChar(xOrString.substring(0, 8), i);
            chars += convertToChar(xOrString.substring(8, 16));
        }
        var isLetters = checkIfAllLetters(chars);
        if (isLetters) {
            if (chars.split(" ").length > 2) { // make sure there are at least two spaces
                var score = checkIfWord(chars.split(" "), dict);
                if (score > highestScore) {
                    highestScore = score;
                }
                if (score >= .13) {
                    console.log("FOUND");
                    console.log("----------");
                    var words = "";
                    for (var j = 0; j < chars.length; j++) {
                        words += chars[j];
                    }
                    console.log(words);
                    console.log(i, i.toString(2));
                    i = repeatFor;
                }
            }
        }
        // console log stuff
        if ((i % 3000 == 0 && i > 0) || i == repeatFor - 1) {
            console.log(i + " : keys tested");
            console.log(isLetters);
        }
    }
    console.log("----------");
    console.log(highestScore);
}

function checkIfAllLetters(chars) {
    var score = 0;
    for (var i = 0; i < chars.length; i++) {
        if ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ,.".includes(chars[i])) {
            score += 1 / chars.length;
        }
    }
    if (score > 0.6) {
        return true;
    }
    return false;
}

function checkIfWord(chars, dict) {
    var score = 0;
    for (var i = 0; i < chars.length; i++) {
        if (dict[chars[i].toLowerCase()]) {
            score += (chars[i].length / chars.length);
        }
    }
    return score;
}

function convertToChar(binary, i) {
    var char = String.fromCharCode(parseInt(binary, 2));
    return char;
}

function performXOR(binary, i) {
    i = i.toString(2);
    var xOrString = "";
    for (var j = i.length - 1; j >= 0; j--) {
        var newJ = (binary.length - 1) - ((i.length - 1) - j);
        if (i[j] == binary[newJ]) {
            xOrString = 0 + xOrString;
        }
        else {
            xOrString = 1 + xOrString;
        }
    }
    xOrString = binary.substring(0, binary.length - i.length) + xOrString;
    return xOrString;
}
