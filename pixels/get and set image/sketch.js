// get and set pixels in an image with pixels[]

let img; // Declare variable img
let imgCopy; // a copy of the image to meess with
// Load the image
function preload() {
  img = loadImage("images/blixa.jpg");
}

function setup() {
  createCanvas(600, 800);

  img.resize(600, 800);

  // img.width/img.height are attributes about
  // your image that can be used as a variable
  let iw = img.width;
  let ih = img.height;

  // load the image into the pixels array
  // NB, the pixels[] array is a freebie
  // there's no need to declare it

  img.loadPixels();
  img.updatePixels();

  imgCopy = createImage(iw, ih);
  imgCopy.loadPixels();
  imgCopy.updatePixels();
}

function draw() {
  background(255);
  // copy pixel values from the pixel[] array
  for (let i = 0; i < img.pixels.length; i++) {
    imgCopy.pixels[i] = img.pixels[i];
  }
  // update the pixels to display them
  imgCopy.updatePixels();
  // draw the copy
  image(imgCopy, 0, 0);
}
