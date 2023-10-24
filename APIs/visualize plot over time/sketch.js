// plots brooklyn weather over the next 5 days, offset by 3h

let weather = "loading";
let temps = [];
let dates = [];
let lowT, highT;
let url = "https://api.openweathermap.org/data/2.5/forecast?lat=40.650002&lon=-73.949997&appid=527babb16277dfd8046941982848d4ae&units=imperial";

function setup() {
  createCanvas(400, 600);
  background('aliceblue');
  loadJSON(url, getTemp);
  lowT = color(0, 0, 127);
  highT = color(190, 75, 0);
}

function draw() {


}

function getTemp(data) {
  let bulk = data.list;
  console.log(bulk);
  for (let i = 0; i < bulk.length; i++) {
    dates[i] = bulk[i].dt_txt;
    temps[i] = bulk[i].main.temp;
  }
  textSize(8);
  beginShape();
  vertex(-10, -1000);
  for (let i = 0; i < temps.length; i++) {
    strokeWeight(10);
    point(temps[i] * 4, i * 15 + 10);
    vertex(temps[i] * 4, i * 15 + 10);
    push();
    translate(temps[i] * 4 + 7, i * 15 + 13);
    text(temps[i], 0, 0);
    pop();
  }
  vertex(-10, height + 1000);
  strokeWeight(2);
  stroke(0);
  fill(0, 100);
  endShape();
  stroke(220);
  textSize(12);
  text("Brooklyn forecast every 3 hours from " + dates[0] + "UTC to " + dates[dates.length - 1] + "UTC", 300, 30, 90, height);
}
