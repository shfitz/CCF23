let capture;  // variable to hold the video capture

function setup() {
  createCanvas(640, 480);
  // create the capture object
  capture = createCapture(VIDEO);
  // set the size of the capture
  capture.size(640, 480);
  // hide the HTML video
  capture.hide();
}

function draw() {
  background(255);
  // draw the video
  image(capture, 0, 0, width, height);
  // iterate over the image 
  for (let x = 0; x < capture.width; x += 20) {
    for (let y = 0; y < capture.height; y += 20) {
      // get color of every 20th pixel
      let c = get(x, y);
      noStroke();
      fill(c);
      // draw a circle there
      ellipse(x, y, 20, 20);
    }
  }

}
