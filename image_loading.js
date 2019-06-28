var mouseX = 0;
var mouseY = 0;
var canvas = document.getElementById("imageCanvas");
var context = canvas.getContext("2d");
var ufo = new Image();
ufo.onload = function() {
	context.drawImage(ufo, 400, 150, 80, 40);
};
ufo.src = "images/ufo2.png";

var bg_img = new Image();
bg_img.onload = function() {
	context.drawImage(bg_img, 0, 0, 900, 500);
};
bg_img.src = "images/1974331.jpg";

var beam = new Image();
beam.onload = function() {
	context.drawImage(beam, 400, 200);
};
// beam.style.opacity = 0.5;
beam.src = "images/beam2.png";

var posX = 400;
var posY = 150;

function draw() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(bg_img, 0, 0, 1000, 500);
	// console.log(mouseY);
	ufoDisplay();
	// beamMeUp();

	requestAnimationFrame(draw);
}
draw();

var xPos = 0;
var yPos = 0;

function ufoDisplay() {
	// context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(ufo, xPos - 40, yPos - 20, 80, 40);
	beamMeUp();
	// requestAnimationFrame(ufoDisplay);
}

// var intervalID;
// function tweentoPos() {
// 	intervalID = setInterval(drawUFO, 1000);
// }

var drawUFO = setInterval(() => {
	if (!beamClick) {
		xPos += (mouseX - xPos) / 12;
		yPos += (mouseY - yPos) / 12;
		ufo.clientLeft = xPos;
		ufo.clientTop = yPos;
		beamHeight = 0;
		// beamWidth = 0;
	} else {
		if (beamHeight < 150) {
			beamHeight += 5;
		}
		// if (beamWidth < 35) {
		// 	beamWidth += 1;
		// }
	}
}, 20);

$("#imageCanvas").mousemove(function(e) {
	// console.log(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
	// console.log(mouseX, mouseY);
	// context.clearRect(0, 0, canvas.width, canvas.height);
	posX = mouseX = e.clientX - this.offsetLeft;
	posY = mouseY = e.clientY - this.offsetTop;
});

var beamClick;

$("#imageCanvas").mousedown(function(e) {
	// console.log("Clicked");
	beamClick = true;
});

$("#imageCanvas").mouseup(function(e) {
	beamClick = false;
});

var beamHeight = 0; // 200
var beamWidth = 35;

function beamMeUp() {
	if (beamClick) {
		context.globalAlpha = 0.4;
		context.drawImage(beam, xPos - 17, yPos + 15, beamWidth, beamHeight);
		context.globalAlpha = 1;
	}
}
