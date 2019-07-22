makeSureClosingTagsExist("<b><i><u>test</b></i></u> of everything", ["<u>", "<b>", "<i>", "</u>", "</b>", "</i>"])

function makeSureClosingTagsExist(txt, patterns) {
    var orderToCloseIn = [];
    for (var i = 0; i < txt.length; i++) {
        for (var j = 0; j < patterns.length / 2; j++) {
            if (txt.substring(i, i + patterns[j].length) == patterns[j]) {
                // opening tags
                orderToCloseIn.push(j);
                j = patterns.length / 2;
            }
        }
        for (var j = patterns.length / 2; j < patterns.length; j++) {
            if (txt.substring(i, i + patterns[j].length) == patterns[j]) {
                // closing tags

                // correct nonexistant opening tags
                var condition = orderToCloseIn[orderToCloseIn.length - 1] + (patterns.length / 2) == j;
                if (orderToCloseIn.length < 1) {
                    condition = true;
                }
                // correct nonexistant closing tags
                if (condition) { // good
                    if (patterns[orderToCloseIn[orderToCloseIn.length - 1] + (patterns.length / 2)] != txt.substring(i, i + patterns[j].length)) {
                        let txt1 = txt.substring(0, i);
                        let txtBetween = patterns[j - (patterns.length / 2)];
                        let txt2 = txt.substring(i, txt.length);
                        txt = txt1 + txtBetween + txt2;
                        i += txtBetween.length;
                    }
                    orderToCloseIn.splice(orderToCloseIn.length - 1, orderToCloseIn.length);
                }
                else { // bad
                    var txt1 = txt.substring(0, i);
                    var txtMissing = patterns[orderToCloseIn[orderToCloseIn.length - 1] + (patterns.length / 2)];
                    var txt2 = txt.substring(i, txt.length);
                    txt = txt1 + txtMissing + txt2;
                    orderToCloseIn.splice(orderToCloseIn.length - 1, orderToCloseIn.length);
                }
                j = patterns.length;
            }
        }
    }
    // clean up anything left behind by in orderToCloseIn
    for (var i = 0; i < orderToCloseIn.length; i++) {
        txt += patterns[orderToCloseIn[i] + patterns.length / 2];
    }
    console.log(txt);
}
