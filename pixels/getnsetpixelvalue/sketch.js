// get pixel values from an image

let img; // Declare variable img

function preload() {
  // load the image
  img = loadImage("images/blixa.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  img.resize(600, 800);
}

function draw() {
  background(255);
  // draw the image
  image(img, 0, 0);
  // load the pixels of the canvas
  loadPixels();
  // variable to hold color
  // get will return the rgba of the pixel
  let pixelColor = get(mouseX, mouseY);

  // display the value as text
  textSize(24);
  fill(127);
  text(pixelColor, img.width + 26, 20);
  fill(color(pixelColor));
  // display the color in a square
  text(pixelColor, img.width + 25, 20);
  rect(img.width, 0, 20, 20);
}
