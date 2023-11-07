let pos;
let accel;
let vel;
let mouse;
let dir;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pos = createVector(width / 2, height / 2);
  accel = createVector(0, 0);
  vel = createVector(0, 0);
  background(0);
}

function draw() {
  noStroke();
  background(0, 1);
  mouse = createVector(mouseX, mouseY);
  dir = mouse.sub(pos); // get direction
  dir.normalize(); // normalize direction
  dir.mult(.5); // scale
  accel = dir; // set acceleration

  vel.add(accel); //velocity is changed by accel
  vel.limit(5); // cap the motion
  pos.add(vel); // position is changed by vel

  ellipse(pos.x, pos.y, 20);
}