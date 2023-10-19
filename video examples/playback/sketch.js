let vid; // object to hold video

// load video
function preload() {
  vid = createVideo(['video/eye.webm'], ['video/eye.mp4']);
}
// nothing to see here
// video is an HTML5 tag and will natively play outside the canvas 
function setup() {
  noCanvas();
}
// interaction is needed to kick it off
function mousePressed() {
  vid.play();
}