let playing = false;
let vid;
let button;

function preload() {
  // can specify multiple formats for different browsers
  vid = createVideo('video/campus.webm');
}

function setup() {
  noCanvas();
  // createCanvas(windowWidth, windowHeight);
  button = createButton('play');
  button.mousePressed(toggleVid); // attach button listener
  button.position(10, 10);
  // vid.hide();
}
/*
function draw() {
  image(vid, 0, 0);
}
*/
// plays or pauses the video depending on current state
function toggleVid() {
  if (playing) {
    vid.pause();
    button.html('play');
  } else {
    vid.loop();
    button.html('pause');
  }
  playing = !playing;
}