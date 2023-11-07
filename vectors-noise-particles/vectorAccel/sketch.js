let loc;
let vel;
let accel;

function setup() {
  createCanvas(400, 400);
  loc = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  accel = createVector(.0, .1);
}

function draw() {
  background(220);
  vel.add(accel);
  vel.limit(20);
  loc.add(vel);
  ellipse(loc.x, loc.y, 50, 50);

  if (loc.x >= width || loc.x <= 0) vel.x = vel.x * -1;
  if (loc.y >= height || loc.y <= 0) vel.y = vel.y * -1;
}