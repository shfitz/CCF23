// let url = "https://corsproxy.io/?http://api.open-notify.org/astros.json";
//let url = "http://api.open-notify.org/astros.json";

let data;

function preload(){
  data = loadJSON(url);
} 

function setup() {
  createCanvas(400, 400);
  console.log(data);
}

function draw() {
  background(220);
}
