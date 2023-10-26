let img; // image we will eventually display on our canvas
let processed;

function preload() {
  img = loadImage("images/blixa.jpg");
}

function setup() {
  createCanvas(600, 800);
  img.resize(600, 800);

  processed = createImage(img.width, img.height); // create a blank image to be the same size as our canvas
  processed.loadPixels(); // load our pixels into our first set of pixels into the image
  console.log("ready!");
}

function draw() {
  background(255);
  img.loadPixels(); // load pixel information into our mirror array

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let currpixel = (y * img.width + x) * 4;

      // randomly move the pixels from one to the other within a range
      let offset = (y * img.width + floor(random(width - x))) * 4;

      // do something weird with the color channels
      processed.pixels[offset] = img.pixels[currpixel]; // in the image swap red values for blue values
      processed.pixels[offset + 1] = img.pixels[currpixel + 1]; // in the image swap green values for red values
      processed.pixels[offset + 2] = img.pixels[currpixel + 2]; // in the image swap blue values for green values
      processed.pixels[offset + 3] = img.pixels[currpixel + 3]; // keep alpha the same for now
    }
  }

  processed.updatePixels(); // update all the pixels for the image after you've looped through all the pixels

  image(processed, 0, 0); // finally write new processed image to the canvas
}
