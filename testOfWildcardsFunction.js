var allLetterCombinations = [];
var itts = 0;

findWords("??", [0,1], 0, 1)
// console.log(findWords("??", [0,1], 0, 1));
console.log(itts);

function findWords(letters, questionMarks, counter, layersDeep) {
    for (let i = 97; i < 123; i++) {
        itts++;
        console.log(i, letters)
        // new combo
        var newLetters = letters.substring(0, questionMarks[counter]) + String.fromCharCode(i) + letters.substring(questionMarks[counter] + 1, letters.length);
        // call itself again
        if (layersDeep < questionMarks.length) {
            findWords(newLetters, questionMarks, counter + 1, layersDeep + 1);
        }
        else {
            allLetterCombinations.push(newLetters);
        }
    }
    if (layersDeep == 1) {
        return allLetterCombinations;
    }
}
