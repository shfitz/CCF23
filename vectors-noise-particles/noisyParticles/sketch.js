let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  for (let i = 0; i < 10; i++) {
    points.push(new NPoint(width / 2, height / 2));
  }
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    points[i].update();
    points[i].display();
  }
}

function mousePressed() {
  points.push(new NPoint(mouseX, mouseY));
}

class NPoint {
  constructor(x, y) {
    // current position
    this.pos = createVector(x, y);
    this.ppos = createVector(x, y);

    // set random speed 
    this.speed = createVector(random(-5, 5), random(-5, 5));

    // For varying noise value
    this.offset = createVector(random(0.001, 0.05), random(0.001, 0.05));
    // size and alpha
    this.opacity = random(10, 100);
    this.maxSize = random(1, 4);
    this.size = this.maxSize;
  }

  update() {
    // use sin & framecount to change the size of the particles
    // multiplying sine value to a constant number will 
    // change the amplitude of the sine curve
    // add 1 so that the minimum value is 1
    this.size = this.maxSize * sin(frameCount * 0.01) + 1;

    // use framecount to move x & y axis with noise
    // subtract 0.5 from noise value to make the range between -0.5 and 0.5
    // this will allow x and y to move in all 4 directions
    this.offset.x += (noise(frameCount * this.offset.x) - 0.5) * this.speed.x;
    this.offset.y += (noise(frameCount * this.offset.y) - 0.5) * this.speed.y;
    this.offset.limit(5);
    this.pos.add(this.offset);

    // if position hits boundaries, move it to the other side
    if (this.pos.x > width) {
      this.ppos.x = this.pos.x = 0;
    }

    if (this.pos.x < 0) {
      this.ppos.x = this.pos.x = width;
    }

    if (this.pos.y > height) {
      this.ppos.y = this.pos.y = 0;
    }

    if (this.pos.y < 0) {
      this.ppos.y = this.pos.y = height;
    }
  }

  display() {
    strokeWeight(this.size);
    stroke(255, this.opacity);
    line(this.pos.x, this.pos.y, this.ppos.x, this.ppos.y);

    // after line is drawn, set current position to previous position
    this.ppos.x = this.pos.x;
    this.ppos.y = this.pos.y;
  }
}