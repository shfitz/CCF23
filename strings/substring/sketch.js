let source = "Yak milk is solid";
let seed = [];

function setup() {
  createCanvas(400, 400);
  textSize(24);
  for (let i = 0; i < source.length; i++) {
    seed[i] = random(1.0);
  }
}

function draw() {
  background(255);
  for (let i = 0; i < source.length; i++) {
    text(source.substring(i, i + 1), width / source.length * i, noise(seed[i]) * height);
    seed[i] += .001;
  }
}