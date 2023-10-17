// map the amplitude of a sound file to
// the size of circles on the screen

// press 'p'  to play sound
// press 's' to stop sound
// prtess spacebar to remove all items from the array

let spooky; // sound file
let amp; // var to hold amplitude follower
let bubs = []; //array for visualizer

// preload the sound
function preload() {
  spooky = loadSound('audio/6.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  // create instance of amplitude follower
  amp = new p5.Amplitude();
  spooky.setVolume(0.2);
}

function draw() {
  background(320, 75, 75, .01);
  // if the sound is playing
  if (spooky.isPlaying()) {
    // get the amplitude
    let level = amp.getLevel();
    // map the amplitude 
    let size = map(level, 0, 1, 0, width);
    // iterate the array of visualizers if something is there
    if (bubs.length > 0) {
      for (let i = 0; i < bubs.length; i++) {
        // render() takes size as an argumment
        bubs[i].render(size);
      }
    }
  }
}

function mouseDragged() {
  // make a new visualizer where the mouse is pressed
  let col = (bubs.length + 1) % 360;
  bubs.push(new Visualizer(mouseX, mouseY, col));
}

function keyPressed() {
  userStartAudio();
  if (key == 'p') { // if 'p' is pressed
    // start playing
    spooky.play();
  } else if (key == 's') { // if 's' is pressed
    spooky.pause(); // pause the sound
  } else if (key == ' ') { // if spacebar is pressed
    // remove everything in the array
    while (bubs.length > 0) {
      bubs.pop();
    }
  }
}

class Visualizer {
  constructor(_x, _y, _c) {
    this.x = _x;
    this.y = _y;
    this.sc = random(.5, 3);
    this.col = color(_c, random(50, 100), random(50, 100), random(.01, .1));
  }
  render(_s) {
    this.size = _s * this.sc;
    fill(this.col);
    // strokeWeight(2 * this.sc)
    noStroke();
    ellipse(this.x, this.y, this.size);
  }
}