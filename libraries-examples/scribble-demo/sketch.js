let scribble = new Scribble(); // import library
// vars
let n = 0.0;
let x, y;

function setup() {
  createCanvas(400, 400);
  // starting points
  x = 200;
  y = 200;
}

function draw() {
  background(255);
  // randomSeed 
  randomSeed(int(noise(n) * 100));
  scribble.scribbleEllipse(x, y, 40, 40);

  x += random(-2, 2);
  y += random(-2, 2);
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);

  n += .001;
}
