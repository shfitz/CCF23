// vars for our ball
let pos;
let speed;

function setup() {
  createCanvas(400, 400);
  // create vectors
  pos = createVector(width / 2, height / 2);
  speed = createVector(0, 0);
  // give them meaning
  speed.x = random(-2, 2);
  speed.y = random(-2, 2);
}

function draw() {
  background(220);
  // add the two together
  pos.add(speed);
  // bounce if walls
  if (pos.x >= width - 25 || pos.x <= 25) speed.x *= -1;
  if (pos.y >= height - 25 || pos.y <= 25) speed.y *= -1;
  // draw that ball!
  ellipse(pos.x, pos.y, 50);
}