let song;
// load the song before the sketch starts
function preload() {
  song = loadSound("sounds/Nala Sinephro - Space 1.8 - 03 Space 3.mp3");
}

function setup() {
  createCanvas(400, 400);
  // set the volume
  song.setVolume(.25);
}

function draw() {
  background(220);
  // check if the song is playing
  text("is the sound playing?", 100, 100);
  if (song.isPlaying()) { // will return true or false
    text("yep!", 100, 120);
  } else {
    text("nope!", 100, 120);
  }

}

function mouseReleased() {
  song.play(); // sounds need some sort of interaction to start
}


