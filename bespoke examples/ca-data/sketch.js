let data;
let parsed;
let countries = [];

function preload() {
  data = loadJSON("data.json", cleanIt);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

function cleanIt() {
  // convert relevant data to string
  let countrydata = JSON.stringify(data.data);
  // replace the "202206" with "info" becasue we can't parse a digit
  countrydata = countrydata.replaceAll(/202206/g, "info");
  // back into JSON
  let parsedcountry = JSON.parse(countrydata);
  // store each country into an index in an array
  // stores data into a 2d array
  for (let i in parsedcountry) {
    countries.push([i, parsedcountry[i]])
  }
  // print country name, followed by 
  // ground_truth_internet_gg
  for (let i in countries) {
    console.log(countries[i][0]);
    console.log(countries[i][1].info.ground_truth_internet_gg);
  }
}
