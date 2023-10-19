let capture;  // variable to hold the video capture

function setup() {
  createCanvas(640, 480);
  // create the capture object
  capture = createCapture(VIDEO);
  // set the size of the capture
  capture.size(640, 480);
  // hide the HTML video
  //capture.hide();
}

function draw() {
  background(255);
  // draw the video
  image(capture, 0, 0, width, height);
}
