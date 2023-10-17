let mic; // object to hold the microphone
let py = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  // get audio
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);

  fill(255);
  noStroke();
  text('Click, then make some noise', width / 2, 20);
  stroke(255);
  strokeWeight(10);

  // get the level from the mic
  // returns val between 0 - 1
  micLevel = mic.getLevel();
  // figure out how high to draw the line
  let y = height - micLevel * height;
  // smooth it a bit visually
  y = lerp(y, py, .5);
  // draw line
  line(width / 2, height, width / 2, y);

  py = y;

}
// need to interact with page for audio to start
function mousePressed() {
  getAudioContext().resume();
}