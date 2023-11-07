// current x and y positions
let walker, pwalker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = createVector(0, 0);
  pwalker = createVector(0, 0);
  background(0);
  stroke(255);
}

function draw() {
  walker.x = walker.x + (noise(frameCount * 0.01) - 0.5) * 5;
  walker.y = walker.y + (noise(frameCount * 0.02) - 0.5) * 5;

  if (walker.x > width) {
    pwalker.x = walker.x = 0;
  }

  if (walker.x < 0) {
    pwalker.x = walker.x = width;
  }

  if (walker.y > height) {
    pwalker.y = walker.y = 0;
  }

  if (walker.y < 0) {
    pwalker.y = walker.y = height;
  }

  line(walker.x, walker.y, pwalker.x, pwalker.y);

  pwalker.x = walker.x;
  pwalker.y = walker.y;
}