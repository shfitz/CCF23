let pointers = [];
function setup() {
  createCanvas(400, 400);
  for (let x = 20; x < 400; x += 40) {
    for (let y = 20; y < 400; y += 40) {
      pointers.push(new Pointer(x, y));
    }
  }
}

function draw() {
  background(220);

  for (let i = 0; i < pointers.length; i++) {
    let mouse = createVector(mouseX, mouseY);
    mouse.sub(pointers[i].ctr);
    mouse.normalize(); // scale to 1
    mouse.mult(15); // prob want this to be whole 
    push();
    translate(pointers[i].ctr.x, pointers[i].ctr.y);
    console.log(pointers[i].ctr.x, pointers[i].ctr.y);
    line(0, 0, mouse.x, mouse.y);
    pop();
  }
}


class Pointer {
  constructor(x, y) {
    this.ctr = createVector(x, y);
  }
}