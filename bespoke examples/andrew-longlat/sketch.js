// get City Bench Locations and plot them out geospatially
// https://data.cityofnewyork.us/Transportation/City-Bench-Locations-Historical-/kuxa-tauh
let url = "https://data.cityofnewyork.us/resource/kuxa-tauh.json?$limit=3000";
let data;
// these are roughly the bounds of NYC in lat & lon
let xmin = 73.6;
let xmax = 74.34;
let ymin = 40.5;
let ymax = 41.;

// load the json, then call the setvars function
function preload() {
  loadJSON(url, setvars);
}

function setup() {
  createCanvas(400, 400);
  background(150);
}

function draw() {
  strokeWeight(1);
  // loop throguh the data
  for (let i = 0; i < data.length; i++) {
    // color the locations depending on the borough
    if (data[i].borough == "Brooklyn") {
      stroke(255, 0, 0);
    } else if (data[i].borough == "Manhattan") {
      stroke(0);
    } else if (data[i].borough == "Bronx") {
      stroke(100, 100, 255);
    } else if (data[i].borough == "Queens") {
      stroke(0, 255, 0);
    } else {
      stroke(0, 255, 255);
    }
    // map the x & y for the points by gettingt he absolute value
    // of the long (x-axis) & lat (y-axis)
    // map it according to the bounds of the city and draw a point
    // in this dataset, there is a key/value pair longitude and latitude
    // as well as a k/v pair for the borough name
    let x = map(abs(data[i].longitude), xmax, xmin, 0, width)
    let y = map(abs(data[i].latitude), ymax, ymin, 0, height);
    point(x, y);
  }
}
// called when the data is all loaded
function setvars(resp) {
  data = resp; // store in a global variable
  console.log(data); // i print this out so i know how to walk through the data 
}

