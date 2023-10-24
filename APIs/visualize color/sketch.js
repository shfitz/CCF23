function setup() {
  createCanvas(windowWidth, windowHeight);
  // load JSON with callback
  loadJSON("https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/web_colors.json", printData);

  background(0);
  noLoop();
}

function printData(data) {
  console.log(data);
  textSize(18);
  strokeWeight(.5);
  stroke(200);
  let x = 10;
  // loop through and offset the text
  for (let i = 0; i < data.colors.length; i++) {
    if (i != 0 && i % 40 == 0) {
      x += 200;
    }
    // use the fill color 
    fill(data.colors[i].hex)
    // write out the names of the colors
    text(data.colors[i].color, x, (i % 40) * 20 + 20);
    // print it all out to the console
    console.log(i + ' ' + data.colors[i].color);
  }

}