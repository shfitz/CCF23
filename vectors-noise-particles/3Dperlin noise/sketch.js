let inc = 0.01; // increment
let zoff = 0.0;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1); //not too deep
}

function draw() {
  loadPixels(); // load em up
  let xoff = 0; // x offset
  for (let x = 0; x < width; x++) {
    let yoff = 0; // yo ffset
    for (let y = 0; y < height; y++) {
      // 2D perlin noise
      set(x, y, noise(yoff, xoff, zoff) * 255);
      yoff += inc; // increment y
    }
    // increment x
    xoff += inc;
  }
  zoff += inc;
  updatePixels();
}
