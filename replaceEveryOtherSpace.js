replaceSpaces("hi    there    person");

function replaceSpaces(str) {
    var lastChar = "";
    for (var i = 0; i < str.length; i++) {
        if (lastChar == " " && str[i] == " ") {
            str = str.substring(0, i) + "&nbsp" + str.substring(i + 1, str.length);
            i += 4;
            lastChar = "a";
        }
        else {
            lastChar = str[i];
        }
    }
    console.log(str);
}
