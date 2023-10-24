let weather = "loading"; // weather obj
let bgColor = 127;
let lowT, highT;
let baseurl = "https://api.openweathermap.org/data/2.5/weather?q=";
let city = ""
let apikey = "&appid= YOUR API KEY HERE";
let units = "&units=imperial";
let button;
let loc;
let chosen = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loc = createInput('City');
  loc.position(10, 10);
  button = createButton('submit');
  button.position(175, 10);
  button.mousePressed(getPlace);

  lowT = color(0, 0, 127);
  highT = color(190, 75, 0);
}

function draw() {
  /// anything you wanna do here?
  background(bgColor);
  fill(255);
  textSize(24);
  if (chosen) {
    text("Current temperature in " + city + " is " + weather + " degrees Fahrenheit", 20, 100, width - 20, height - 20);
  } else {
    text("Select a City", 20, 100, width - 20, height - 20);
  }
}

function getTemp(data) {
  weather = data.main.temp;
  console.log(weather);
  bgColor = lerpColor(lowT, highT, (weather / 100.0));
}

function getPlace() {
  if (chosen == false) chosen = true;
  city = loc.value();
  let url = baseurl + city + apikey + units;
  loadJSON(url, getTemp);
}
