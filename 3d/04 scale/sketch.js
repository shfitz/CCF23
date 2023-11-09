let xSlider, ySlider, zSlider;

let myFont;
function preload() {
  myFont = loadFont('font/07558_CenturyGothic.ttf');
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  xSlider = createSlider(0.01, 5., 1., .01);
  ySlider = createSlider(0.01, 5., 1., .01);
  zSlider = createSlider(0.01, 5., 1., .01);

  xSlider.position(10, 10);
  ySlider.position(10, 30);
  zSlider.position(10, 50);

  debugMode();
}

function draw() {
  background(220);
  camera(0, -200, 200, 0, 0, 0);

  push();

  scale(xSlider.value(), ySlider.value(), zSlider.value());
  fill(160, 0, 220);
  box(50);
  // draw lines along x, y, z axes 
  strokeWeight(5);
  stroke(255, 0, 0);
  line(-25, 0, 25, 25, 0, 25);

  stroke(0, 255, 0);
  line(0, -25, 25, 0, 25, 25);

  stroke(0, 0, 255);
  line(0, -25, -25, 0, -25, 25);
  pop();

  fill(0);
  textFont(myFont);
  textSize(18);
  text('x: ' + xSlider.value() + ', y: ' + ySlider.value() + ', z: ' + zSlider.value(), 10, 70);


}
