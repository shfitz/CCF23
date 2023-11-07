// current x and y positions
let x = 0;
let y = 0;

// previous x and y positions
let px = 0;
let py = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(0);
  stroke(255);
}

function draw() {
  // use noise to generate points
  x = x + (noise(frameCount * 0.01) - 0.5) * 5;
  y = y + (noise(frameCount * 0.02) - 0.5) * 5;

  if (x > width) {
    // assign multiple varialbles in one statement
    px = x = 0;
  }

  if (x < 0) {
    px = x = width;
  }

  if (y > height) {
    py = y = 0;
  }

  if (y < 0) {
    py = y = height;
  }

  line(x, y, px, py);

  px = x;
  py = y;
}