// nevermind... decided not to use this

var crypto = require("crypto");

convertToKey("", "");

function convertToKey(str, password) {
    var key = { 0: 25, 1: 16, 2: 29, 3: 27, 4: 32, 5: 18, 6: 10, 7: 1, 8: 15, 9: 22, a: 28, b: 0, c: 9, d: 2, e: 5, f: 13, g: 23, h: 8, i: 7, j: 6, k: 35, l: 20, m: 4, n: 19, o: 24, p: 21, q: 14, r: 33, s: 12, t: 26, u: 17, v: 31, w: 11, x: 30, y: 34, z: 3 };
    var newStr = "";
    var tempShiftAmounts = [];
    for (var i = 0; i < str.length; i++) {
        newStr = str.substring(str.length - i, str.length) + str.substring(0, i) + str.substring(i, str.length - i);
        var hash = crypto.createHash('md5').update(newStr).digest('hex');
        var shifts = [];
        var shiftAmount = 0;
        for (var j = 0; j < hash.toString().length; j++) {
            shifts.push(key[hash.toString()[j]]);
        }
        for (var j = 0; j < shifts.length; j++) {
            shiftAmount += shifts[j] * (j * (520164 / str.length));
        }
        shiftAmount = Math.round(shiftAmount);
        tempShiftAmounts.push(shiftAmount)
    }

    var shiftAmounts = [[], 0];
    for (var i = 0; i < password.length; i++) {
        var number = 0;
        var from = Math.floor(i * (str.length / password.length)); // index * ratio 
        var to = Math.ceil(i * (str.length / password.length) + (str.length / password.length)); // index * ratio + ratio 
        for (var j = 0; j < (to - from); j++) {
            number += Math.round(tempShiftAmounts[j + from] / (str.length / password.length));
        }
        // make number 8 digits long
        number = number.toString().substring(0, 8);
        for (var i = 0; i < number.length / 8; i++) {
            number += number.substring(0, (8 - number.length))
        }
        shiftAmounts[0].push(parseInt(number, 10));
    }
    console.log(shiftAmounts)

}

// this creates the random object

// var k = "0123456789abcdefghijklmnopqrstuvwxyz";
// var j = [];
// var z = {};

// for (var l = 0; l < k.length; l++) {
// 	j.push(l);
// }

// for (var i = 0; i < k.length; i++) {
// 	var random = Math.floor(Math.random() * j.length);
// 	z[k[i]] = j.splice(random, 1)[0];
// }
// console.log(z)
