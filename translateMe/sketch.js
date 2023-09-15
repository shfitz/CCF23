/* 
This example demonstrates how to use push(), pop(), and 
translate() to rotate one object — a square — while another
remains static
*/

// variable for rotation in radians
let rot = 0.0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // draw the rectangle in CENTER mode
  rectMode(CENTER);

  // save the current coordinate system
  push();
  // translate the origin of the drawing system
  // to the mouse position
  translate(mouseX, mouseY);
  // rotate the scene
  rotate(rot);
  // draw the rectangle at 0,0 of the need coordiante system
  // because we're using the mouse x/y as the new origin,
  // the rotation will happen around this point
  rect(0, 0, 100);
  // end the translation and restore the saved origin
  // i.e. return to the default state
  pop();
  // draw an ellipse int he top left corner
  ellipse(100, 100, 100);
  // update the rotation variable
  rot += .01;
}
