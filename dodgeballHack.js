// call these functions in the console

// function lonely() {
// // create a request to the server
//     var request = new XMLHttpRequest();

//     // handle response from the server
//     request.addEventListener("load", dR);

//     // send the request to the server
//     request.open("GET", "/data");
//     request.send();

// function dR() {
// 	var data = JSON.parse(this.response);
// 	for (var key in data.players) {
// if (data.players[key].name != "doggo") {
//     	var request = new XMLHttpRequest();
//             request.open("POST", "/leave");
//             request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//             request.send("playerId=" + key);
// 	}}
// }}


// var request = new XMLHttpRequest();
// request.addEventListener("load", joinResponse);
// request.open("POST", "/join"); request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// request.send("name=doggo&gender=dog" + "&boundaries=off");

// var interval = setInterval(function() {
// 	throwBall4();
// }, 100);
