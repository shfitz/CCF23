// dumb clock
// vars for time
let h, mi, s, d, mo, y;
// vars for color
let r, g, b;

function setup() {
  createCanvas(400, 400);
  // set colors
  r = 0;
  g = 0;
  b = 0;
}

function draw() {
  // change bg based on time
  background(r, g, b);
  // get the time
  h = hour();
  mi = minute();
  s = second();
  // map the values
  r = map(h, 0, 23, 0, 255);
  g = map(mi, 0, 59, 0, 255);
  b = map(s, 0, 59, 0, 255);
  // get the date
  d = day();
  mo = month();
  y = year();
  // print the date
  textSize(24);
  textAlign(LEFT, CENTER);
  text(h + ":" + addZero(mi) + ":" + addZero(s) + " on " + mo + "/" + d + "/" + y, 100, 100);
}
// add a leading zero
function addZero(num) {
  if (num < 9) {
    return "0" + num;
  } else {
    return num;
  }
}