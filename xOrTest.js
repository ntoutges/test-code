performXOR("0111010001000000", 8032)

function performXOR(binary, i) {
    i = i.toString(2);
    var xOrString = "";
    for (var j = i.length - 1; j >= 0; j--) {
        var newJ = (binary.length - 1) - ((i.length - 1) - j);
        console.log(i[j], binary[newJ])
        if (i[j] == binary[newJ]) {
            xOrString = 0 + xOrString;
        }
        else {
            xOrString = 1 + xOrString;
        }
    }
    xOrString = binary.substring(0, binary.length - i.length) + xOrString;
    console.log(xOrString)
    return xOrString
}