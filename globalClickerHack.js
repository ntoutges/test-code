var request = require("request");
console.log("Running");
var counter = 0;

// some options

setInterval(function() {
    counter++;
    request.post("https://rocky-spire-54336.herokuapp.com/click", { form: {} });
    if (counter % 1000 == 0 && counter != 0) {
        console.log("Clicked " + counter + " times");
    }
}, 10);
// var request = new XMLHttpRequest();
// request.open("POST", "/points");
// request.send();
