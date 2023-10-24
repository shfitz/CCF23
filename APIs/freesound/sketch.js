// getting an API with a callback and user input 

// variables
// my client ID would go after the &token
let clientID = "&token= YOUR KEY HERE";
let baseurl = "https://freesound.org/apiv2/search/text/?query=";
// filters
let kind = "&filter=type:mp3";
let data;
let b;
let searchStr;

function setup() {
  createCanvas(windowWidth, windowHeight);
  searchStr = createInput();
  searchStr.position(10, 10);
  b = createButton("get'em!");
  b.position(searchStr.width + 20, 10);
  b.mousePressed(prep);
}

function draw() {
  // nothinbg to do here
}

function prep() {
  let url = baseurl + searchStr.value() + kind + clientID;
  loadJSON(url, loaded);
}

function loaded(resp) {
  data = resp;
  console.log(data);
  background(250);
  textSize(24);
  text("found a total of " + data.count + " sounds with " + searchStr.value(), 10, 60);
  text("here are " + data.results.length + " of them :", 10, 90);

  for (let i = 0; i < data.results.length; i++) {
    text(data.results[i].name, 10, i * 30 + 125);
  }
}
