// declare variables for
// circle x/y and red, green, blue
let circleX;
let circleY;
let r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // generate a random color for the circle
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);

}

function draw() {
  background(255);
  noStroke();
  // fill the circle
  fill(r, g, b);
  // set the variables to 
  // the mouse x/y position
  circleX = mouseX;
  circleY = mouseY;
  // draw our circle
  ellipse(circleX, circleY, 50, 50);

  // draw an empty circle in the center
  // that changes size and shape
  // based on the mouse position
  noFill();
  stroke(0);
  strokeWeight(5);
  ellipse(width / 2, height / 2, mouseX, mouseY);

}
