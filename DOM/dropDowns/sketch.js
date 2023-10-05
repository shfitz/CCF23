let picker; // variable for the menu
let h, s, a, n, d; // variables to hold my images
let img;
let day = "what";

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  background(200);
  // create a menu
  picker = createSelect();
  // position the menu
  picker.position(10, 10);
  // populate the menu with options
  picker.option("Halloween");
  picker.option("Super Fun Day");
  picker.option("Arbor Day");
  picker.option("National Hot Dog Day");
  // callback when an item is picked
  picker.changed(pickEvent);
}

function draw() {
  textAlign(LEFT);
}

function pickEvent() {
  // get the item chosen with .value()
  day = picker.value();

  if (day === "Halloween") {
    console.log("halloween rules! 🎃");
    background("orange");
  } else if (day === "Super Fun Day") {
    background("magenta");
    console.log("🎉Long Live Super Fun Day!🎉");
  } else if (day === "Arbor Day") {
    background(200, 220, 10);
    console.log("🌲🌲🌲🌲🌲🌲🌲🌲🌲");
  } else {
    console.log("is this a sandwich?");
    background("gold");
  }
  text(day + " is the best holiday", 10, 50);
}
