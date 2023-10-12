let spheres = []; // array to hold the bouncers
let beep, boop; // objects to hold sounds
let numBalls = 5; // how many?

function preload() {
  // preload sounds
  beep = loadSound("sounds/beep.mp3");
  boop = loadSound("sounds/boop.mp3");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numBalls; i++) {
    spheres.push(new Ball());  // create new instances
  }
  noStroke();
}

function draw() {
  // put drawing code here
  background(180, 33, 220, 100);

  // call the object functions
  for (let i = 0; i < spheres.length; i++) {
    spheres[i].update();
    spheres[i].wallCheck();
    spheres[i].render();
    for (let j = 0; j < spheres.length; j++) {
      if (j != i) spheres[i].checkCollision(spheres[j].xpos, spheres[j].ypos, spheres[j].diam);
    }
  }

}

// our class defintition
class Ball {
  constructor() {
    this.diam = random(20, 75);
    this.xpos = random(this.diam, width - this.diam);
    this.ypos = random(this.diam, height - this.diam);
    this.xspeed = random(-5, 5);
    this.yspeed = random(-5, 5);
  }

  // update position
  update() {
    this.xpos += this.xspeed;
    this.ypos += this.yspeed;
  }

  // check if it hits a wall
  wallCheck() {
    if (this.xpos >= width - this.diam / 2 || this.xpos <= this.diam / 2) {
      this.xspeed = -this.xspeed;
      // play a sound once
      beep.play();
    }
    if (this.ypos >= height - this.diam / 2 || this.ypos <= this.diam / 2) {
      this.yspeed = -this.yspeed;
      // play a sound once
      beep.play();
    }
  }
  // draw the ball
  render() {
    ellipse(this.xpos, this.ypos, this.diam);
  }
  // did we hit another ball?
  checkCollision(_x, _y, _diam) {
    // get distance between self and another object
    let check = dist(this.xpos, this.ypos, _x, _y);
    // if we hit, reverse direction & play sound
    if (check < (this.diam + _diam) / 2) {
      boop.play();
      this.xspeed = -this.xspeed;
      this.yspeed = -this.yspeed;
    }
  }
}