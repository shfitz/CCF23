// Display an image and bounce it around at 1/2 size

let img; // Declare variable img
let xPos, yPos;
let xSpeed, ySpeed;
let rot = 0.0;
let iw, ih; // variables for the image width and height
let sc = 1.0;

// Load the image
function preload() {
  img = loadImage("images/sweet.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // img.width/img.height are attributes about
  // your image that can be used as a variable
  iw = img.width;
  ih = img.height;

  // position the picture in the sketch
  yPos = width / 2;
  xPos = height / 2;

  xSpeed = random(-3, 3);
  ySpeed = random(-3, 3);
}

function draw() {
  background(255, 5);

  // image is drawn from top left corner
  // to bottom right corner by default
  // imageMode() can be called to change the
  // way it's drawn, similar to rectMode

  imageMode(CENTER);

  // the code below uses translate to
  // relocate the x, y coordinates to the center of the image to move and rotate the image

  push();
  translate(xPos, yPos);
  rotate(rot);
  scale(4. * noise(sc));
  // draw the image at 1/2 it's native size
  image(img, 0, 0, iw / 2, ih / 2);
  pop();

  rot += 0.01;

  xPos += xSpeed;
  yPos += ySpeed;

  if (xPos >= width || xPos <= 0) {
    xSpeed *= -1;
  }
  if (yPos >= height || yPos <= 0) {
    ySpeed *= -1;
  }

  sc += .001;
}
