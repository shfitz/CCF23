function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let mouse = createVector(mouseX, mouseY);
  let ctr = createVector(width / 2, height / 2);

  mouse.sub(ctr);

  mouse.normalize(); // scale to 1
  mouse.mult(75); // prob want this to be whole 

  // let mag = mouse.mag();
  // console.log(mag);

  translate(ctr.x, ctr.y);
  line(0, 0, mouse.x, mouse.y);
}
