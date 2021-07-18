var canvas = document.getElementById("spriteCanvas");
var context = canvas.getContext("2d");

var img = new Image();
img.src = "spritesheet_animation/images/coin-sprite-animation-sprite-sheet.png";

img.onload = function() {
	var totalNumberOfFrames = 10; // ten images in the image (see the url above)
	var imageFrameNumber = 0; // This is changed to make the sprite animate
	var widthOfImage = img.width; // find the width of the image
	var heightOfImage = img.height; // find the height of the image
	var widthOfSingleImage = widthOfImage / totalNumberOfFrames; // The width of each image in the spirite

	setInterval(function() {
		// context.clearRect(0, 0, 500, 500);

		imageFrameNumber++; // changes the sprite we look at
		imageFrameNumber = imageFrameNumber % totalNumberOfFrames; // Change this from 0 to 1 to 2 ... upto 9 and back to 0 again, then 1...

		context.drawImage(
			img,
			imageFrameNumber * widthOfSingleImage,
			0, // x and y - where in the sprite
			widthOfSingleImage,
			heightOfImage, // width and height
			50,
			50, // x and y - where on the screen
			widthOfSingleImage,
			heightOfImage // width and height
		);
	}, 100);
};

function draw() {
	context.drawImage(img, 200, 200);
	requestAnimationFrame(draw);
}
draw();
