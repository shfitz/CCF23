let xSlider, ySlider, zSlider;

let myFont;
function preload() {
  myFont = loadFont('font/07558_CenturyGothic.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  debugMode();

  xSlider = createSlider(-100.0, 100.0, 0, .01);
  ySlider = createSlider(-100.0, 100.0, 0, .01);
  zSlider = createSlider(-100.0, 100.0, 0, .01);

  xSlider.position(10, 10);
  ySlider.position(10, 30);
  zSlider.position(10, 50);
}

function draw() {
  background(220);
  fill('#ED225D');
  camera(0, -200, 200, 0, 0, 0);

  push();
  translate(xSlider.value(), ySlider.value(), zSlider.value());
  box(50);
  pop();

  // draw axes
  push();
  strokeWeight(5);
  stroke(255, 0, 0);
  line(0, 0, 0, xSlider.value(), 0, 0);

  translate(xSlider.value(), 0, 0);
  stroke(0, 255, 0);
  line(0, 0, 0, 0, ySlider.value(), 0);

  translate(0, ySlider.value(), 0);
  stroke(0, 0, 255);
  line(0, 0, 0, 0, 0, zSlider.value());
  pop();

  fill(0);
  textFont(myFont);
  textSize(18);
  text('x: ' + xSlider.value() + ', y: ' + ySlider.value() + ', z: ' + zSlider.value(), 10, 70);
}