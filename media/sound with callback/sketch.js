let song;// object with song
let playButton, pauseButton, loadSong; // controls

function setup() {
  createCanvas(400, 400);
  // buttons
  playButton = createButton("play");
  pauseButton = createButton("pause");
  loadSong = createButton("load rando");
  // move offscreen
  playButton.position(-100, -100);
  pauseButton.position(-100, -100);
  // position onscreen
  loadSong.position(10, 10);
  // tell us what to do when a button is pressed
  playButton.mousePressed(playSound);
  pauseButton.mousePressed(pauseSound);
  loadSong.mousePressed(loadRandom);
}

function draw() {
  background(250);
}
// when the load button is pressed
function loadRandom() {
  let r = int(random(8));
  song = loadSound("sounds/" + r + ".mp3", moveButtons());
}

// move the interface objects around
function moveButtons() {
  playButton.position(10, 10);
  pauseButton.position(100, 10);
  loadSong.position(-100, -100);
}
// play the sound if nothing is currenlty on
function playSound() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(.2);
  }
}
// pause if currently playing
function pauseSound() {
  if (song.isPlaying()) {
    song.pause();
  }
}
