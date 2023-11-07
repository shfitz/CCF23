// based on something from Jiwon Shin

// play around with these amounts of forces
const gravity_amount = 0.6;
const friction_amount = 0.1;
const restitution_amount = 0.9;

// particles
let numParticles = 10;
let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(0);

  for (let i = 0; i < particles.length; i++) {
    // check boundaries first
    particles[i].checkBoundaries();

    let wind = createVector(map(mouseX, 0, width, -0.5, 0.5), 0);
    particles[i].applyForce(wind);

    // then apply gravity (force pulling particles down)
    let gravity = createVector(0, gravity_amount * particles[i].size);
    particles[i].applyForce(gravity);

    // then apply friction (force causing friction, therefore slowing down particles)
    let friction = p5.Vector.mult(particles[i].vel, -1);
    friction.mult(friction_amount);
    particles[i].applyForce(friction);

    // update particle vectors
    particles[i].update();
    // display final result
    particles[i].display();
  }
}

function mousePressed() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].acc.add(createVector(0, map(particles[i].mass, 5, 25, 25, 5) * 3));
  }
}

class Particle {
  constructor() {
    // this.pos replaces this.x and this.y
    this.pos = createVector(random(width), 0);
    // this.vel replaces this.xSpeed and this.ySpeed
    this.vel = createVector(0, 0.1);
    // this.acc will update this.vel and actually "move" particles
    this.acc = createVector(0, 0);
    // this.mass will determine how heavy particles are
    this.mass = random(5, 25);
    // set this.size relative to this.mass
    this.size = this.mass * 5;
  }

  applyForce(force) {
    // heavy mass -> less force (not so easily movable)
    // light mass -> more force (easily movable)
    force.div(this.mass);
    // reflect force to acceleration
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    // set acceleration back to 0 after it is applied to velocity
    // otherwise it particles will accelerate inifinitely
    this.acc.mult(0);
  }

  checkBoundaries() {
    if (this.pos.x < this.size / 2) {
      this.pos.x = this.size / 2;
      this.vel.x *= -1;
      this.vel.mult(restitution_amount); // reduce speed after particles collide
    }

    if (this.pos.x > width - this.size / 2) {
      this.pos.x = width - this.size / 2;
      this.vel.x *= -1;
      this.vel.mult(restitution_amount); // reduce speed after particles collide
    }

    if (this.pos.y < this.size / 2) {
      this.pos.y = this.size / 2;
      this.vel.y *= -1;
      this.vel.mult(restitution_amount); // reduce speed after particles collide
    }

    if (this.pos.y > height - this.size / 2) {
      this.pos.y = height - this.size / 2;
      this.vel.y *= -1;
      this.vel.mult(restitution_amount); // reduce speed after particles collide
    }
  }

  display() {
    circle(this.pos.x, this.pos.y, this.size);
  }


}