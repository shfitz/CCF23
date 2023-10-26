let img; // image to store values in

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 400, 400, 400);
  // create an empty image
  img = createImage(width, height);
  // load pixels to create array
  img.loadPixels();
  // loop through the pixels and set a color
  for (let y = 0; y < img.width; y++) {
    for (let x = 0; x < img.height; x++) {
      img.set(x, y, color(x, y, cos(y / 300) * 400));
    }
  }
  // update the pixels
  img.updatePixels();
  // display the image
  image(img, 0, 0);

  noLoop();
}
