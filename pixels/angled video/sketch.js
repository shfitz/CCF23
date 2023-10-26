let capture; // object to hold the video grabber 

function setup() {
  createCanvas(640, 480);
  // start video grabber
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide(); // hide HTML video
  noFill();
  background(255);
}

function draw() {
  // create pixel array for the grabber
  capture.loadPixels();
  background(255, 30);


  const stepSize = 20; // every 20 pixels
  // loop through the image
  let count = 0;
  for (let y = 0; y < height; y += stepSize) {
    for (let x = 0; x < width; x += stepSize) {
      // magic algo to get the number in the pixel array
      const i = y * width + x;
      // get the value of the pixel's brightness
      // r+g+b/3 will give us a general sense of brightness
      const darkness = (255 - ((capture.pixels[i * 4] + capture.pixels[i * 4 + 1] + capture.pixels[i * 4 + 2]) / 3)) / 255;
      // determine width of the line to draw
      const w = stepSize * darkness;
      // get the rgb values of the pixels and dump into array
      const [r, g, b] = [capture.pixels[i * 4], capture.pixels[i * 4 + 1], capture.pixels[i * 4 + 2]];
      // draw the lines
      push();

      // rotation amt based on darkness
      let rot = map(darkness, 0., 1., 0, TWO_PI);

      // move the translation
      translate(x + stepSize / 2, y + stepSize / 2);

      // set the color
      stroke(r, g, b, darkness * 255);

      // draw it
      rotate(rot);
      strokeWeight(darkness * 5);
      line(-w, -w, w, w);
      pop();
    }
  }

}