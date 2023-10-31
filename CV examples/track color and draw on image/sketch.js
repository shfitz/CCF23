//Here it is a little smoother  
// take the average of all the 
// pixels under a certain threshold 
// and get the center of that mass

let threshold = 20; //255 is white, 0 is black
let avgX, avgY; //this is what we are trying to find
// color to track
let objectR = 255;
let objectG = 0;
let objectB = 0;
let c;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  c = createGraphics(640, 480);
}

function draw() {

  video.loadPixels();

  // find the average location of pixels
  let sumX = 0;  //sum of all the x found 
  let sumY = 0; // sum of all the y found
  let totalFoundPixels = 0;  // and the total found 

  //enter the nested for statements 
  for (let row = 0; row < video.height; row++) {
    for (let col = 0; col < video.width; col++) {
      // the pixels file into the room 
      // use this formula to find what row and column  
      let offset = (row * video.width + col) * 4;
      //pull out the same pixel from the current frame 
      let thisColor = video.pixels[offset];

      //pull out the individual colors for both pixels
      let r = video.pixels[offset];
      let g = video.pixels[offset + 1];
      let b = video.pixels[offset + 2];

      //in a color "space" you find the distance between color the same way you would in a cartesian space
      let diff = dist(r, g, b, objectR, objectG, objectB);

      if (diff < threshold) {  //if it is close enough in size, add it to the average
        sumX = sumX + col;
        sumY = sumY + row;
        totalFoundPixels++;
      }
    }
  }
  video.updatePixels();

  image(video, 0, 0);

  // get the average of the x/y coordinates
  // draw a circle there
  if (totalFoundPixels > 0) {
    avgX = sumX / totalFoundPixels;
    avgY = sumY / totalFoundPixels;
    c.noStroke();
    c.fill(objectR, objectG, objectB);
    c.ellipse(avgX, avgY, 20, 20);
  }
  image(c, 0, 0);

}
function mousePressed() {
  //if there is a click, use that pixel for the new thing to follow
  //pull out the same pixel from the current frame 
  let thisColor = video.get(mouseX, mouseY);
  c.background(255, 0);


  //pull out the individual colors for both pixels
  objectR = thisColor[0];
  objectG = thisColor[1];
  objectB = thisColor[2];
  console.log("Chasing new color " + objectR + " " + objectG + " " + objectB);
}