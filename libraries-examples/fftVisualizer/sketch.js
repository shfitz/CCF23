let song; // object to hold song
let fft; // objects for fft

let menu;

//load songs
function preload() {
  song = loadSound("audio/bird.mp3");
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  // new fft object
  fft = new p5.FFT();
  song.loop();
  song.setVolume(.2);
}

function draw() {
  background(0, 0, 0, .4);
  analyzeAndDraw(); // separate function for clarity
}

// ffts take 'bins' of frequencies and get the 'energy' of
// a sound that they are provided. this ranges in value from 0-255
function analyzeAndDraw() {
  // must call analyze() first
  let spec = fft.analyze();
  let bins = [];
  let mappedVal = [];
  for (let i = 0; i < width; i++) {
    bins[i] = fft.getEnergy((i * 40) + 31, ((i + 1) * 40) + 31);
  }

  for (let i = 0; i < width; i++) {
    stroke(map(i, 0, width, 270, 0), 100, 100);
    mappedVal[i] = map(bins[i], 0, 255, 0, height / 2);
    line(i, height / 2 + mappedVal[i], i, height / 2 - mappedVal[i]);
  }
}

function mousePressed() {
  userStartAudio();
}