let r, g, b, a;

function setup() {
  createCanvas(400, 400);
  r = createSlider(0, 255, 200);
  r.position(6, 10);
  g = createSlider(0, 255, 100);
  g.position(6, 50);
  b = createSlider(0, 255, 200);
  b.position(6, 90);
  a = createSlider(0, 255, 0);
  a.position(6, 130);
}

function draw() {
  background(255);
  fill(180, 0, 220);
  rect(6, 200, 100, 100);
  fill(r.value(), g.value(), b.value(), a.value());
  rect(60, 250, 100, 100);
  fill(0);
  text('Red: ' + r.value(), 10, 42);
  text('Green: ' + g.value(), 10, 82);
  text('Blue: ' + b.value(), 10, 122);
  text('Alpha: ' + a.value(), 10, 162);
}

function mouseReleased() {
  console.log("color val: (" + r.value() + "," + g.value() + "," + b.value() + "," + a.value() + ")");
}