var counter = 0;
var text = "Monday morning, the world is dead... And I killed it... somehow... I don't know how it happened, but it did, and I regret nothing except my regrets"
var interval = setInterval(function() {
    counter++;
    for (var i = 0; i < 4; i++) {
        console.log("")
    }
    console.log(text.substring(0, counter) + "|");
    if (counter == text.length) {
        for (var i = 0; i < 4; i++) {
            console.log("")
        }
        console.log(text);
        clearInterval(interval);
    }
}, 100)
