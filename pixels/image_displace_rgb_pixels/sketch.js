let pine;
let rPine;
let gPine;
let bPine;

function preload() {
  pine = loadImage("images/pineapple.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
  pixelDensity(1);
  pine.resize(600, 800);

  rPine = createImage(pine.width, pine.height);
  gPine = createImage(pine.width, pine.height);
  bPine = createImage(pine.width, pine.height);
  rPine.loadPixels();
  gPine.loadPixels();
  bPine.loadPixels();

  pine.loadPixels();
  for (var y = 0; y < pine.height; y++) {
    for (var x = 0; x < pine.width; x++) {
      var index = (x + y * pine.width) * 4;

      // get the values
      let r = pine.pixels[index + 0];
      let g = pine.pixels[index + 1];
      let b = pine.pixels[index + 2];
      let a = pine.pixels[index + 3];

      // do stuff with the values

      rPine.pixels[index + 0] = r;
      rPine.pixels[index + 1] = 0;
      rPine.pixels[index + 2] = 0;
      rPine.pixels[index + 3] = a;

      gPine.pixels[index + 0] = 0;
      gPine.pixels[index + 1] = g;
      gPine.pixels[index + 2] = 0;
      gPine.pixels[index + 3] = a;

      bPine.pixels[index + 0] = 0;
      bPine.pixels[index + 1] = 0;
      bPine.pixels[index + 2] = b;
      bPine.pixels[index + 3] = a;
    }
  }
  rPine.updatePixels();
  gPine.updatePixels();
  bPine.updatePixels();
}

function draw() {
  background(255);
  // get pixels of the image and do weirdness

  image(rPine, 0, 0);
  image(gPine, width / 2, 0);
  image(bPine, width / 3, 0);



}

function windowResize() {
  resizeCanvas(windowWidth, windowHeight);
}
