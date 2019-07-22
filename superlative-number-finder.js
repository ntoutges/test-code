var counter = 0;
var displayCounter = 0;
var highScore = 0;
var superlativeNum = 0;
var addative = 2;
var interval = setInterval(findNum, 4);

var display = ["\\ \\   ", " \\ \\  ", "  \\ \\ ", "  | | ", "  | | ", "  | | ", "  | | ", "   \\ \\", "   | |", "   | |", "   | |", "   / /", "  | | ", "  | | ", "  / / ", " / /  ", "/ /   ", "| |   ", "| |   ", "| |   ", "| |   "];

function findNum() {
	displayCounter *= 20;
	displayCounter += 1;
	displayCounter /= 20;
	if (superlativeNum % 10 == 0) {
		addative = 10;
	}
	counter += addative;
	var score = 0;
	for (var i = 1; i <= Math.sqrt(counter); i++) {
		if (counter % i == 0) {
			score++;
		}
	}
	if (score > highScore) {
		highScore = score;
		superlativeNum = counter;
	}

	if (Math.floor(displayCounter) == displayCounter) {
		var printThisFirst = display[Math.floor(displayCounter % display.length)];
		console.log(printThisFirst + "   " + superlativeNum + "   " + highScore + "   " + counter)
	}
}
