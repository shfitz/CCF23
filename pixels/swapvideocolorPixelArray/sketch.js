let img; // image we will eventually display on our canvas
let capture;

function setup() {
  createCanvas(640, 480);
  // specify multiple formats for different browsers
  capture = createCapture(VIDEO); // our video object that will just see what the camera sees
  capture.size(640, 480);
  capture.hide();
  img = createImage(640, 480); // create our image to be the same size as our canvas
  img.loadPixels(); // load our pixels into our first set of pixels into the image
}

function draw() {
  background(255);
  capture.loadPixels(); // load pixel information into our mirror array

  for (let i = 0; i < 4 * (capture.width * capture.height); i += 4) {
    //multiply and step by 4 since each pixel has 4 color variables associated with it (r,g,b,a)

    let r = capture.pixels[i]; // store red value
    let g = capture.pixels[i + 1]; // store green value
    let b = capture.pixels[i + 2]; // store blue value
    let a = capture.pixels[i + 3]; // store alpha value

    if (mouseIsPressed) {
      // do something weird with the color channels

      img.pixels[i] = b; // in the image swap red values for blue values
      img.pixels[i + 1] = r; // in the image swap green values for red values
      img.pixels[i + 2] = g; // in the image swap blue values for green values
      img.pixels[i + 3] = a; // keep alpha the same for now
    } else {

      // copy the pixel values the same as the original
      img.pixels[i] = r; // copy red
      img.pixels[i + 1] = g; // copy green
      img.pixels[i + 2] = b; // copy blue
      img.pixels[i + 3] = a; // keep alpha the same for now

    }
  }
  img.updatePixels(); // update all the pixels for the image after you've looped through all the pixels
  image(img, 0, 0); // finally write new processed image to the canvas
}