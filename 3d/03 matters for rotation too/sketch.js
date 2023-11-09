let xSlider, ySlider, zSlider;

let myFont;
function preload() {
  myFont = loadFont('font/07558_CenturyGothic.ttf');
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  xSlider = createSlider(0, 360, 180, .01);
  ySlider = createSlider(0, 360, 180, .01);
  zSlider = createSlider(0, 360, 180, .01);

  xSlider.position(10, 10);
  ySlider.position(10, 30);
  zSlider.position(10, 50);

  debugMode();
}

function draw() {
  background(220);
  camera(0, -200, 200, 0, 0, 0);
  angleMode(DEGREES);
  push();
  rotateX(xSlider.value());
  rotateY(ySlider.value());
  rotateZ(zSlider.value());

  // draw lines along x, y, z axes in rotated space
  strokeWeight(4);
  stroke('red');
  line(0, 0, 0, 100, 0, 0);
  stroke('green');
  line(0, 0, 0, 0, 100, 0);
  stroke('blue');
  line(0, 0, 0, 0, 0, 100);

  normalMaterial();
  // noFill();
  torus(30, 20);
  pop();

  fill(0);
  textFont(myFont);
  textSize(18);
  text('x: ' + xSlider.value() + ', y: ' + ySlider.value() + ', z: ' + zSlider.value(), 10, 70);

}
