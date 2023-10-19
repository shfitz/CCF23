let text;
let completeText;

// use preload or a callback so the
// complete file loads before referencing it
function preload() {
  // loadStrings puts the textfile's content
  // into a variable. it is loaded as an object
  // paragraphs, separated by a new line character (aka the 'return' key)
  // become indices in an array 
  text = loadStrings('morton.txt');
}

function setup() {
  createCanvas(400, 400);
  // print out all the text
  console.log(text);
  // number of items in text
  console.log(text.length);
  // just print the second paragraph
  console.log(text[1]);

  // join() will bring all the text back together as one object
  completeText = join(text, '\n');

  console.log(completeText);
}
