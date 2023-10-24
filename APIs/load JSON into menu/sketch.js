let bgColor = 'White';
let chooser;

function setup() {
  createCanvas(800, 600);
  // load JSON with callback
  loadJSON("https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/web_colors.json", printData);
  // create dropdown, move offscreen until content is loaded
  chooser = createSelect();
  chooser.position(-100, -100);
}

function draw() {
  // draw background
  background(bgColor);
}

function printData(data) {
  // populate the menu
  for (let i = 0; i < data.colors.length; i++) {
    chooser.option(data.colors[i].color);
  }
  // move the menu and indicate what to do when changed
  chooser.changed(getColor);
  chooser.position(10, 10);
}

function getColor() {
  // update bg color
  bgColor = chooser.value();
}