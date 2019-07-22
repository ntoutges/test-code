var crypto = require('crypto');

var password = "username";
// make hash
var hash = crypto.createHash('md5').update(password).digest('hex');
// block cypher
var hashBlock = [];
var key = "1110001101111110";
var key2 = 4178618;
for (var i = 0; i < hash.length; i += 2) {
    var char1 = hash.charCodeAt(i).toString(2); // 8
    var char2 = hash.charCodeAt(i + 1).toString(2); // 8
    var combo = char1 + char2; // 16
    combo = performXOR(combo, key); // 16
    combo = convertToChar(combo); // 8
    combo += key2 * i; // 9
    hashBlock.push(combo); // 9
}
// // make all 9 long
// for (var i = 0; i < hashBlock.length; i++) {
//     var newHashBlockItem = hashBlock[i].toString();
//     var length = newHashBlockItem.length;
//     for (var j = 0; j < 9 - length; j++) {
//         newHashBlockItem = " " + newHashBlockItem;
//     }
//     hashBlock[i] = newHashBlockItem;
// }
var newHashBlock = "";
for (var i = 0; i < hashBlock.length; i++) {
    newHashBlock += hashBlock[i];
}
console.log(newHashBlock)

function performXOR(binary, key) {
    key = key.toString(2);
    var xOrString = "";
    for (var j = key.length - 1; j >= 0; j--) {
        var newJ = (binary.length - 1) - ((key.length - 1) - j);
        if (key[j] == binary[newJ]) {
            xOrString = 0 + xOrString;
        }
        else {
            xOrString = 1 + xOrString;
        }
    }
    xOrString = binary.substring(0, binary.length - key.length) + xOrString;
    return xOrString;
}

function convertToChar(binary) {
    var total = 0;
    for (var i = 0; i < binary.length; i++) {
        var multiplier = Math.pow(3, (binary.length - 1) - i);
        total += multiplier * binary[i];
    }
    return total;
}
