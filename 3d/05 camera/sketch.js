/*
A perspective camera skews objects so they appear 
to get smaller as they get further away, vanishing 
at a single point in the distance. This is in 
contrast to an orthographic camera, where the 
geometry stays the same size as it gets further 
away and has no vanishing point.
*/

let cameraTypeOrtho, cameraTypePerspective;
let method;
let myFont;

function preload() {
  myFont = loadFont('font/07558_CenturyGothic.ttf');
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);



  method = createSelect();
  method.position(10, 90);
  method.option("perspective");
  method.option("ortho");

  debugMode();
}

function draw() {
  background(220);
  orbitControl(); // gives us the ability to move around the center with the mouse
  if (method.value() == "ortho") {
    ortho();
  } else if (method.value() == "perspective") {
    perspective();
  }
  fill(255);
  box(50);
  push();
  translate(-200, 0, 0);
  fill(255, 0, 0);
  box(50);
  pop();

  push();
  translate(200, 0, 0);
  fill(0, 255, 0);
  box(50);
  pop();

  push();
  translate(0, -200, 0);
  fill(0, 0, 255);
  box(50);
  pop();

}
