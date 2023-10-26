let img;

function preload() {
  img = loadImage("images/blixa.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Resize the image so it fits on the screen.
  img.resize(150, 200);
  noSmooth();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  for (let i = 0; i < 800; i++) {
    img.loadPixels();
    sortPixels();
    img.updatePixels();
  }
  image(img, 0, 0, width, height);
}

function sortPixels() {

  // Get a random pixel.
  let x = int(random(img.width));
  let y = int(random(img.height - 1));

  // Get the color of the pixel.
  // Get the color of the pixel below the first one.
  let loc1 = int(4 * (x + y * img.width));
  let loc2 = int(4 * (x + (y + 1) * img.width));

  // get rgb values from each
  let r1 = img.pixels[loc1];
  let g1 = img.pixels[loc1 + 1];
  let b1 = img.pixels[loc1 + 2];

  let r2 = img.pixels[loc2];
  let g2 = img.pixels[loc2 + 1];
  let b2 = img.pixels[loc2 + 2];

  let totalOne = r1 + g1 + b1;
  let totalTwo = r2 + g2 + b2;

  if (totalOne < totalTwo) {
    img.pixels[loc1] = r2;
    img.pixels[loc1 + 1] = g2;
    img.pixels[loc1 + 2] = b2;

    img.pixels[loc2] = r1;
    img.pixels[loc2 + 1] = g1;
    img.pixels[loc2 + 2] = b1;
  }
}