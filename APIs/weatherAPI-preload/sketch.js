let weather; // hold the data
let bgColor;

function preload() {
  // load JSON with my appID
  weather = loadJSON("https://api.openweathermap.org/data/2.5/weather?lat=40.650002&lon=-73.949997&appid=527babb16277dfd8046941982848d4ae&units=imperial");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(weather);
}

function draw() {
  background(100);
  fill(255);
  textSize(24);
  // get the temp and display it on screen
  text("current temperature in Brooklyn is " + getTemp(weather), 100, 100);

}

function getTemp(data) {
  // parse the data file
  let temp = data.main.temp;
  return temp;
}