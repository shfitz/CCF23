// preload an api using a proxy to get esports rankings
// https://vlrggapi.vercel.app/ has the docs
let data;
let val;
let URL = "https://vlrggapi.vercel.app/rankings/na";
let proxyURL = 'https://corsproxy.io/?';

function preload() {
  // combine proxy with the url
  let combo = proxyURL + URL;
  data = loadJSON(combo);
}

function setup() {
  createCanvas(400, 400);
  // print to console
  console.log(data);
}

function draw() {
  background(220);
}
