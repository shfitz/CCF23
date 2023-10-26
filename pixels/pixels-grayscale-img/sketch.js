let pine;

function preload() {
  pine = loadImage("images/pineapple.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  pine.loadPixels();
  for (var y = 0; y < pine.height; y++) {
    for (var x = 0; x < pine.width; x++) {
      var index = (x + y * pine.width) * 4;

      // get the values
      let r = pine.pixels[index + 0];
      let g = pine.pixels[index + 1];
      let b = pine.pixels[index + 2];
      let a = pine.pixels[index + 3];

      // get average and set the vals
      let gr = (r + g + b) / 3;
      // do stuff with the values

      pine.pixels[index + 0] = gr;
      pine.pixels[index + 1] = gr;
      pine.pixels[index + 2] = gr;
      pine.pixels[index + 3] = 255;
    }
  }
  pine.updatePixels();
}

function draw() {
  // get pixels of the image and do weirdness 
  image(pine, 0, 0, width, height);


}

function windowResize() {
  resizeCanvas(windowWidth, windowHeight);
}
