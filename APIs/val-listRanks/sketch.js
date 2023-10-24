// preload an api using a proxy to get esports rankings
// https://vlrggapi.vercel.app/ has the docs
let data;
let URL = "https://vlrggapi.vercel.app/rankings/na";
let proxyURL = 'https://corsproxy.io/?';
let logos = [];
let num = 3;

function preload() {
  // combine proxy with the url
  let combo = proxyURL + URL;
  data = loadJSON(combo);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(24);
  // piopulate an array of images with top logos
  for (let i = 0; i < num; i++) {
    let imgloc = proxyURL + "http:" + data.data[i].logo;
    logos.push(loadImage(imgloc));
  }
}

function draw() {
  background(255);
  // print out some info about what we're seeing
  text("there are " + data.data.length + " teams in NA. Here are the top " + num, 10, 20);
  // list team names
  for (let i = 0; i < num; i++) {
    text(data.data[i].team, 100, i * 100 + 80);
  }
  //  draw logos
  for (let i = 0; i < logos.length; i++) {
    image(logos[i], 10, i * 100 + 40, 80, 80);
  }
}
