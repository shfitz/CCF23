// Initialize the Image Classifier method with MobileNet
// A callback needs to be passed.
let classifier;

// A variable to hold the image we want to classify
let img;

function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  img = loadImage('images/blixa.jpeg');
}

function setup() {
  createCanvas(1000, 800);
  background(255);
  classifier.classify(img, gotResult);
  image(img, 0, 0, 600, 800);
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    for (let i = 0; i < results.length; i++) {
      stroke(0);
      text('result: ' + results[i].label + ", percent: " + nf(results[i].confidence, 0, 2), 620, 24 + 24 * i);
    }
  }
}