function setup() {
  // WEB GL opens the 3d toolkit
  createCanvas(windowWidth, windowHeight, WEBGL);
  // draw a grid and orientation
  // debugMode();
}

function draw() {
  background(255);
  // objects are drawn at 0,0,0
  // aka the center of the screen
  fill(0, 0, 255);
  box();
}
