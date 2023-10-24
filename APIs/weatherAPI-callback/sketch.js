let weather = "loading"; // obj to hold weather
let bgColor = 127;
let lowT, highT;
let baseurl = "https://api.openweathermap.org/data/2.5/weather?lat=40.650002&lon=-73.949997&units=imperial&appid=";
let key = "your api key here";
function setup() {
  createCanvas(windowWidth, windowHeight);
  // load in setup, call getTemp when ready
  let url = baseurl + key;
  loadJSON(url, getTemp);
  lowT = color(0, 0, 127);
  highT = color(190, 75, 0);
}

function draw() {
  background(bgColor);
  fill(255);
  textSize(24);
  // update every ~5min or so (expect 60fps, 60 sec in a min)
  if (frameCount % 18000 == 0) loadJSON(url, getTemp);
  text("Current temperature in Brooklyn is " + weather + " degrees Fahrenheit", 20, 20, width - 20, height - 20);

}

function getTemp(data) { // callback receives data from loadJSON 
  weather = data.main.temp;
  console.log(weather);
  bgColor = lerpColor(lowT, highT, (weather / 100.0));
}
