replaceEnters("hi\nthere");

function replaceEnters(str) {
    while (str.split("\n").length >= 2) {
        str = str.replace("\n", "<br>");
    }
    console.log(str)
}
