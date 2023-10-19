let data; // json file
// arrays of data
let user = [];
let bev = [];
let breakfast = [];

function preload() {
  // load data
  data = loadJSON("prefs.json");
}

function setup() {
  createCanvas(400, 400);
  // iterate over values in the data
  for (let i = 0; i < data.likes.length; i++) {
    // store data in arrays
    user[i] = data.likes[i].name;
    bev[i] = data.likes[i].drink;
    breakfast[i] = data.likes[i].food;
  }
}

function draw() {
  background(250);
  textSize(24);
  // write it out
  for (let i = 0; i < data.likes.length; i++) {
    text(
      user[i] + " likes " + bev[i] + " and " + breakfast[i],
      20,
      40 * (1 + i)
    );
  }
  noLoop();
}
