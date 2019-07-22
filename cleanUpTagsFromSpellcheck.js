cleanUp("", ["<u>", "<b>", "<i>", "</u>", "</b>", "</i>"]);


function cleanUp(txt, patterns) {
    var tagBefore = false;
    for (var i = 0; i < txt.length; i++) {
        var subI1 = false;
        for (var j = 0; j < patterns.length / 2; j++) {
            if (txt.substring(i, i + patterns[j].length) == patterns[j]) {
                i += patterns[j].length;
                tagBefore = patterns[j + patterns.length / 2];
                subI1 = true;
                break;
            }
        }
        for (var j = patterns.length / 2; j < patterns.length; j++) {
            if (txt.substring(i, i + patterns[j].length) == patterns[j]) {
                if (tagBefore == patterns[j]) {
                    txt = txt.substring(0, i - patterns[j - patterns.length / 2].length) + txt.substring(i + patterns[j].length, txt.length);
                    i -= ((patterns[j].length) + (patterns[j - patterns.length / 2].length));
                    i--;
                    break;
                }
            }
        }
        if (subI1) {
            i--;
        }

        tagBefore = false;
    }
    console.log(txt)
}
