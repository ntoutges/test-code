var word = "????";

findIt(word);
console.time()

function findIt(word) {
    var fakeI = {};
    var constants = word.split("?");
    var questionMarks = word.split("?").length - 1;
    for (var i = 0; i < questionMarks; i++) {
        fakeI["a" + i] = 0;
    }
    var newWords = [];
    for (var i = 0; i < Math.pow(26, questionMarks); i++) {
        var newWord = "";
        for (var j = 0; j < (questionMarks * 2) + 1; j++) {
            if (j % 2 == 0) {
                newWord += constants[j / 2];
            }
            else {
                newWord += String.fromCharCode(fakeI["a" + ((j - 1) / 2)] + 97)
            }
        }
        newWords.push(newWord);
        fakeI["a0"]++;
        if (fakeI["a0"] % 26 == 0 && fakeI["a0"]) {
            for (var j = 1; j < questionMarks; j++) {
                if (fakeI["a" + (j - 1)] % Math.pow(26, j) == 0) {
                    fakeI["a" + j]++;
                    fakeI["a" + (j - 1)] = 0;
                }
            }
        }
    }
    console.log(newWords)
    console.timeEnd();
}
