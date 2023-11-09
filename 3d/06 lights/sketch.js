// think of the world's coordinate as:
// -width/2,-height/2 ----------- width/2,-height/2
//                   |           |
//                   |    0,0    |
//                   |           |
//  -width/2,height/2 ----------- width/2,height/2

let method;
let myFont;

function preload() {
  myFont = loadFont('font/07558_CenturyGothic.ttf');
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  method = createSelect();
  method.position(10, 90);
  method.option("ambient");
  method.option("directional");
  method.option("point");

  // debugMode();
  // ortho();
}

function draw() {
  background(220);
  // orbitControl(); // gives us the ability to move around the center with the mouse

  if (method.value() == "ambient") {
    ambientLight(255, 0, 0); // provides even (omnidirectional) ambient lighting to objects drawn afterward.
    sphere(50);
  } else if (method.value() == "directional") {
    /*
  directionalLight rays shine in a given direction, 
  but they do not have a specific point of origin, 
  and therefore cannot be positioned closer or 
  farther away from a geometry. 
    */
    let locX = (mouseX / width - .5) * 2;
    let locY = (mouseY / height - .5) * 2;
    directionalLight(255, 0, 0, locX, locY, -1);
    ambientMaterial(255);
    sphere(50);
  } else if (method.value() == "point") {
    /*
     pointLight takes a color and a location as parameters.
     pointLight shines from a specific point of origin, and
     therefore reflects differently when it is farther vs. 
     nearer the object.
     */
    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;
    pointLight(255, 255, 255, locX, locY, 50);
    specularMaterial(250, 0, 0);
    sphere(50);
  }
}
