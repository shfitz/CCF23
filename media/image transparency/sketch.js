let bgimage; // var to hold img
let pineapple;
let spark;

function preload() {
  bgimage = loadImage("images/weirdo.jpg"); // Load the image
  pineapple = loadImage("images/pineapple.png");
  spark = loadImage("images/sparkle.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Displays the image at its actual size at point 0,0
  image(bgimage, 0, 0);

  // cover the background of a sketch
  // image(bgimage, 0, 0, width, height);

  // have the image follow the mouse
  // image(bgimage,mouseX,mouseY, bgimage.width/2, bgimage.height/2);

  // resize image based on mouse
  // image(bgimage,0, 0, mouseX,mouseY);

  /*
  // images with transparency are also supported
  // you can use translations too
  push();
  translate(mouseX, mouseY);
  rotate(frameCount / 25);
  imageMode(CENTER);
  image(pineapple, 0, 0, pineapple.width / 4, pineapple.height / 4);
  pop();

  // default mode
  imageMode(CORNER);
  image(spark, 0, 0, width, height);
  */
}

function windowResize() {
  resizeCanvas(windowWidth, windowHeight);
}
