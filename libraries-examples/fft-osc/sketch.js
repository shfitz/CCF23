// sound variables
let osc;
let vol = 0;
let frequency = 220;
let fft;

let minF = 31;
let maxF = 1200;

function setup() {
  createCanvas(440, 440);

  // set up sound things
  osc = new p5.Oscillator();
  osc.setType("sine"); // kinds are 'sine', 'triangle', 'sawtooth' or 'square'
  osc.freq(frequency);
  osc.amp(vol);
  osc.start();

  fft = new p5.FFT();
}

function draw() {
  background(0);
  stroke(255);
  // map the values from the mouse position to amp and freq
  frequency = map(mouseX, 0, width, minF, maxF);
  vol = map(mouseY, 0, height, 0, 0.5);

  // sound generation
  osc.amp(vol, 0.1);
  osc.freq(frequency);

  // analyze the audio signal and draw intensities for each of the bins
  let bins = fft.analyze();
  // loop thru the freqs
  for (let i = minF; i < maxF; i++) {
    let y = map(i, minF, maxF, 0, height);
    let val = fft.getEnergy(i);
    let lineX = map(val, 0, 255, 0, width);
    line(0, y, lineX, y);
  }
}
function mousePressed() {
  userStartAudio();
}