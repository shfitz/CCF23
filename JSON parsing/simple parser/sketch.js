let data; // object to hold data

// preload to get the info before the sketch runs
function preload() {
  data = loadJSON('prefs.json');
}

function setup() {
  createCanvas(400, 400);
  // access data with dot notation
  let user = data.name;
  let bev = data.drink;
  let breakfast = data.food;
  // print it out!
  console.log(user + ' likes ' + bev + ' and ' + breakfast);

  background(250);
  textSize(24);
  text(user + ' likes ' + bev + ' and ' + breakfast, 10, 10, width - 10, height - 10);
}
