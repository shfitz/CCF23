// set pixels with pixels[]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  // load the canvas into the pixels array
  // NB, the pixels[] array is a freebie
  // there's no need to declare it
  loadPixels();

  // fill pixel values from the pixel[] array
  // get screen density
  let d = pixelDensity();
  // loop thru all pixels
  let totalpix = pixels.length;
  for (let i = 0; i < totalpix; i += 4) {
    pixels[i] = random(255);
    pixels[i + 1] = random(255);
    pixels[i + 2] = random(255);
    pixels[i + 3] = 255;
  }
  // update the pixels to display them
  updatePixels();
}
