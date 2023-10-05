let hSlide, sSlide, bSlide;
let h, s, b;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  // colormode
  colorMode(HSB);
  // create the sliders
  hSlide = createSlider(0, 360, 180); // low val, high val, default
  sSlide = createSlider(0, 100, 50);
  bSlide = createSlider(0, 100, 50);

  // position the sliders
  hSlide.position(10, 20);
  sSlide.position(10, 40);
  bSlide.position(10, 60);

  // variables to hold the color
  h = 180;
  s = 50;
  b = 50;
}

function draw() {
  background(h, s, b);

  // position text for labels
  textAlign(LEFT, TOP);
  text('hue : ' + hSlide.value(), 20 + hSlide.width, 20);
  text('saturation : ' + sSlide.value(), 20 + sSlide.width, 40);
  text('brightness : ' + bSlide.value(), 20 + bSlide.width, 60);

  // read the value of the slider and store it in a variable
  h = hSlide.value();
  s = sSlide.value();
  b = bSlide.value();
}
