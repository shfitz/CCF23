let song1, song2, song3; // objects to hold songs
let fft; // objects for fft
let menu;

//load songs
function preload() {
  song1 = loadSound("audio/CureForPain.mp3");
  song2 = loadSound("audio/bird.mp3");
  song3 = loadSound("audio/lifeOfLeisure.mp3");
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  // new fft object
  fft = new p5.FFT();
  // dropdown menu
  menu = createSelect();
  menu.option("Cure for Pain");
  menu.option("Bird");
  menu.option("Life of Leisure");
  menu.changed(songChange);
}

function draw() {
  background(0, 0, 0);
  analyzeAndDraw(); // separate function for clarity
}

// ffts take 'bins' of frequencies and get the 'energy' of
// a sound that they are provided. this ranged in value from 0-255
function analyzeAndDraw() {
  // must call analyze() first
  let spec = fft.analyze();
  // 5 oredefined bins of freq
  let low = fft.getEnergy("bass");
  let lmid = fft.getEnergy("lowMid");
  let mid = fft.getEnergy("mid");
  let hmid = fft.getEnergy("highMid");
  let high = fft.getEnergy("treble");

  // convert values fromn 0-255 to something useable 
  let xl = map(low, 0, 255, 0, width);
  let xlm = map(lmid, 0, 255, 0, width);
  let xm = map(mid, 0, 255, 0, width);
  let xhm = map(hmid, 0, 255, 0, width);
  let xh = map(high, 0, 255, 0, width);

  // draw values
  noStroke();
  fill(0, 100, 255);
  rect(0, 0, xl, height / 5);

  fill(360 / 5, 100, 255);
  rect(0, height / 5, xlm, height / 5);

  fill((360 / 5) * 2, 100, 255);
  rect(0, 2 * (height / 5), xm, height / 5);

  fill((360 / 5) * 3, 100, 255);
  rect(0, 3 * (height / 5), xhm, height / 5);

  fill((360 / 5) * 4, 100, 255);
  rect(0, 4 * (height / 5), xh, height / 5);
}

// callback for menu
function songChange() {
  // pick a song
  let songName = menu.value();
  if (songName == "Cure for Pain") {
    if (song2.isPlaying()) song2.stop();
    if (song3.isPlaying()) song3.stop();
    song1.play();
    song1.setVolume(.5);
  } else if (songName == "Bird") {
    if (song3.isPlaying()) song3.stop();
    if (song1.isPlaying()) song1.stop();
    song2.play();
    song2.setVolume(.5);
  } else if (songName == "Life of Leisure") {
    if (song2.isPlaying()) song2.stop();
    if (song1.isPlaying()) song1.stop();
    song3.play();
    song3.setVolume(.5);
  }
}
