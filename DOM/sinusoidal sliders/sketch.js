// set slider value with a sin wave
// array of sliders
let sliders = [];
//offset
let offset = 0.0;

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 10; i++) {
    // create the sliders
    sliders.push(createSlider(0, 400, 50));
    // draw the sliders on screen
    sliders[i].position(10, i * 40 + 20);
    //  set their attributes
    sliders[i].style("width", "380px");
  }
}

function draw() {
  background(0);
  // loop through the array
  for (let i = 0; i < sliders.length; i++) {
    // calculate a value
    let val = sin(i / 2 + offset);
    // use sin to adjust the slider value
    sliders[i].value(val * 200 + 200);
    // update the offset
    offset += .0025
  }
}
