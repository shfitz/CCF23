let circs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  for (let i = 0; i < 360; i++) {
    circs.push(new Follower(i));
  }
  background(0, 0, 100);
}

function draw() {

  for (let i = 0; i < circs.length; i++) {
    circs[i].update();
    circs[i].edges();
    circs[i].render();
  }

}

class Follower {

  constructor(num) {
    this.inst = num;
    this.loc = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.accel = createVector(0, 0);
  }

  update() {
    // get the vector that points to the mouse
    let m = createVector(mouseX, mouseY);
    let dir = m.sub(this.loc);
    // normalize it
    dir.normalize();
    // scale it
    dir.mult(.05);
    // set acceleration
    this.accel = dir;

    // acceleration changes velocity
    this.vel.add(this.accel);
    this.vel.limit(5);
    // velocity changes position
    this.loc.add(this.vel);
  }

  render() {
    noStroke();
    fill(this.inst % 360, 255, 100);
    ellipse(this.loc.x, this.loc.y, 10);
  }

  edges() {
    if (this.loc.x > width) this.loc.x = 0;
    if (this.loc.x < 0) this.loc.x = width;
    if (this.loc.y > height) this.loc.y = 0;
    if (this.loc.y < 0) this.loc.y = height;
  }
}