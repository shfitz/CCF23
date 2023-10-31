let video;
let display;
let bgImg;
let refImg;
// How different must a pixel be to be a foreground pixel
let threshold = 35;

function preload() {
  bgImg = loadImage("images/house.jpeg");
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  // Create an empty image the same size as the video
  refImg = createImage(width, height);
  display = createImage(width, height);
  // resize the background image
  bgImg.resize(width, height);
}

function draw() {
  // We are looking at the video's pixels, the stored 
  // referenceImage's pixels, as well as accessing the display pixels.
  // So we must loadPixels() for all!
  video.loadPixels();
  refImg.loadPixels();
  display.loadPixels();
  bgImg.loadPixels();
  // Begin loop to walk through every pixel
  for (let x = 0; x < video.width; x++) {
    for (let y = 0; y < video.height; y++) {
      let loc = (x + y * video.width) * 4; // What is the 1D pixel location
      // Store the RGB values for each pixel of the video and our background image
      let r1 = video.pixels[loc];
      let g1 = video.pixels[loc + 1];
      let b1 = video.pixels[loc + 2];
      let r2 = refImg.pixels[loc];
      let g2 = refImg.pixels[loc + 1];
      let b2 = refImg.pixels[loc + 2];
      //Compare the foreground and background color
      let diff = dist(r1, g1, b1, r2, g2, b2);
      // Is the foreground color different from the background color
      if (diff > threshold) {
        // If so, display the foreground color
        display.pixels[loc] = video.pixels[loc];
        display.pixels[loc + 1] = video.pixels[loc + 1];
        display.pixels[loc + 2] = video.pixels[loc + 2];
        display.pixels[loc + 3] = video.pixels[loc + 3];
      }
      else {
        // If not, display background image
        display.pixels[loc] = bgImg.pixels[loc];
        display.pixels[loc + 1] = bgImg.pixels[loc + 1];
        display.pixels[loc + 2] = bgImg.pixels[loc + 2]; // We could choose to replace the background pixels with something other than the color green!
        display.pixels[loc + 3] = 255;
      }
    }
  }
  //update the display image
  display.updatePixels();
  // display the updated display image
  image(display, 0, 0);
  // show our threshold in text at the bottom of the screen
  fill(0);
  rect(0, height - 20, width, height);
  fill(255);
  text("Threshold is now: " + threshold, 20, height - 5);
}

function mousePressed() {
  for (let i = 0; i < video.pixels.length; i++) {
    refImg.pixels[i] = video.pixels[i];
  }
  refImg.updatePixels();
  changeThreshold(); // comment this out to keep threshold constant
}
// change the threshold on the fly depending on where you click
function changeThreshold() {
  threshold = map(mouseX, 0, width, 0, 255);
  print("Threshold is now: " + threshold);
}